const express = require("express");
const routes = require("./routes")

const api = express();
api.use(routes);


// esta instrução aqui que vai ficar esperando as requisições
api.listen(3000, () => {
    console.log("API rondando lindamente no na porta 3000");
    console.log("Acesse via http://localhost:3000");
});
