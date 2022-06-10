const Funcionario = require('../model/Funcionario');

/*
const create = async (req, res) => {
    const data = req.body;

    const ret = await Login.create(data);

    res.json(ret);
}
*/

const login = async (req, res) => {
    const data = req.body;

    const ret = await Funcionario.findAll({
        attributes: {
            exclude: ['senha']
        },
        where: {
            email: data.email,
            senha: data.senha,
        }
    });

    res.json(ret[0]);
}

/*
const read = async (req, res) => {
    const id = req.params.id;
    
    const ret = await Login.findAll(id);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Login.update(data, {
        where: { id: id }
    }) ;

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Login.destroy({
        where: { id: id }
    });

    if(ret == 1) {
        res.json({id: id});
    }else {
        res.status(400).send();
    }
}
*/
module.exports = {
    login
}