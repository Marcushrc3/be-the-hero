const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333);


/*
Método GET:
Buscar alguma informação no back-end

Método POST:
Criar uma informação no back-end

Método PUT:
Alterar uma informação no back-end

Método DELETE:
Deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na roata após o "?" (Filtros , Paginação)
Route Params: Parâmetros para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


