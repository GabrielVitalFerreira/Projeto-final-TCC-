'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_produto')) ?? []
const setLocalStorage = (dbProduto) => localStorage.setItem("db_produto", JSON.stringify(dbProduto))

// CRUD - create read update delete
const deleteProduto = (index) => {
    const dbProduto = readProduto()
    dbProduto.splice(index, 1)
    setLocalStorage(dbProduto)
}

const updateProduto = (index, produto) => {
    const dbProduto = readProduto()
    dbProduto[index] = produto
    setLocalStorage(dbProduto)
}

const readProduto = () => getLocalStorage()

const createProduto = (produto) => {
    const dbProduto = getLocalStorage()
    dbProduto.push (produto)
    setLocalStorage(dbProduto)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveProduto = () => {
    debugger
    if (isValidFields()) {
        const produto = {
            id: document.getElementById('id').value,
            nome: document.getElementById('nome').value,
            quantidade: document.getElementById('quantidade').value,
            datadeentrada: document.getElementById('datae').value,
            datadevalidade: document.getElementById('datav').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createProduto(produto)
            updateTable()
            closeModal()
        } else {
            updateProduto(index, produto)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (produto, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.datadeentrada}</td>
        <td>${produto.datadevalidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableProduto>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableProduto>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbProduto = readProduto()
    clearTable()
    dbProduto.forEach(createRow)
}

const fillFields = (produto) => {
    document.getElementById('id').value = produto.id
    document.getElementById('nome').value = produto.nome
    document.getElementById('quantidade').value = produto.quantidade
    document.getElementById('datae').value = produto.datadeentrada
    document.getElementById('datav').value = produto.datadevalidade
    document.getElementById('nome').dataset.index = produto.index
}

const editProduto = (index) => {
    const produto = readProduto()[index]
    produto.index = index
    fillFields(produto)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editProduto(index)
        } else {
            const produto = readProduto()[index]
            const response = confirm(`Deseja realmente excluir o produto ${produto.nome}`)
            if (response) {
                deleteProduto(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarProduto')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveProduto)

document.querySelector('#tableProduto>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)