const express = require("express")
const mysql = require('mysql')

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: 'db',      
    database: 'node_db',       
    user: 'node_user',           
    password: '123456',   
});

const fixture = [
    "Ana Souza",
    "Carlos Pereira",
    "Mariana Silva",
    "Lucas Oliveira",
    "Gabriela Santos",
    "Rafael Costa",
    "Larissa Martins",
    "Felipe Alves",
    "Juliana Rocha",
    "Paulo Henrique",
    "Fernanda Lima",
    "Thiago Pereira",
    "Camila Ferreira",
    "Ricardo Gomes",
    "Beatriz Carvalho",
    "Eduardo Almeida",
    "Vanessa Rodrigues",
    "Marcelo Dias",
    "Bruna Mendes",
    "Sérgio Oliveira"
];

connection.connect((err)=>{
    if (err) {
        return console.error('Erro de conexão: ' + err.message);
      }
      console.log('Conectado ao banco de dados.');
})


app.get('/healthcheck', (req, res) => {
    res.send('ok')
})

app.get('/', async (req, res) => {
    const name = fixture[Math.floor(Math.random() * fixture.length)]
    console.info("new name: " + name)
    addPeople(name)    

    const names = await fetchNames()
    res.send(
        "<b> Go Rocks! </b> <br><br>" + 
        `<b> Nomes: </b><br> ${names.join("<br> ")}`
    )
})

app.listen(port, ()=>{
    console.log(`api running at port: ${port}`)
})


async function fetchNames(){
    try {
        return await getAllPeople();
    } catch (error) {
        console.err(error)
    }
}

function getAllPeople(){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT name from people;`, function (err, rows) {
            if (err){
                reject(err)
            }
    
            let result = Object.values(JSON.parse(JSON.stringify(rows)));
            let names = result.map((value) => value.name)

            resolve(names)
        })
    })
}

function addPeople(name){
    try {
        if(name){
            connection.query(`INSERT INTO people(name) values('${name}');`)
        }
    } catch (error) {
        console.log(error)
    }
}
