## Objetivo: fazer um proxy reverso com NGINX para o Node.js

>  Quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

Install
```
yarn install
```

Containers Up
```
docker-compose up -d
```

Acessar o APP: localhost:8080
