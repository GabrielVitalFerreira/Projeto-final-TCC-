const Funcionario = require('../model/Funcionario');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Funcionario.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const config = {
        attributes: {
            exclude: ['senha']
        },
        
    }

    if(id != null) config.where = {id:id}

    console.log(config);

    const ret = await Funcionario.findAll(config);


    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Funcionario.update(data, {
        where: { id: id }
    });
    
    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Funcionario.destroy({
        where: { id: id }
    });

    if(ret == 1) {
        res.json({id: id})
    }else {
        res.status(400).send();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}