const express = require("express");
const route = express.Router(); 

const EstoqueController = require('./src/controll/EstoqueController');
const FuncionarioController = require('./src/controll/FuncionarioController');
const InsumoController = require('./src/controll/InsumoController');
const RetiradaController = require('./src/controll/RetiradaController');
const LoginController = require('./src/controll/LoginController');

route.post('/estoque', EstoqueController.create);
route.get('/estoque', EstoqueController.read);
route.put('/estoque/:id', EstoqueController.update);
route.delete('/estoque/:id', EstoqueController.remove);

route.post('/func', FuncionarioController.create);
route.get('/func/:id', FuncionarioController.read);
route.get('/func/', FuncionarioController.read);
route.put('/func/:id', FuncionarioController.update);
route.delete('/func/:id', FuncionarioController.remove);

route.post('/insumo', InsumoController.create);
route.get('/insumo', InsumoController.read);
route.put('/insumo/:id', InsumoController.update);
route.delete('/insumo/:id', InsumoController.remove);

route.post('/retirada', RetiradaController.create);
route.get('/retirada', RetiradaController.read);
route.put('/retirada/:id', RetiradaController.update);
route.delete('/retirada/:id', RetiradaController.remove);

route.post('/login/', LoginController.login);
// route.get('/login', LoginController.read);
//route.put('/login/:id', LoginController.update);
//route.delete('/login/:id', LoginController.remove);

route.post('/login', LoginController.login);

module.exports = route;    