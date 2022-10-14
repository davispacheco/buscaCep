const bairro = document.querySelector('#bairro');
const cep = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const logradouro = document.querySelector('#logradouro');

cep.addEventListener('blur', (e) =>{
    const idCep = cep.value;

console.log(cep);

const options = {
    method: 'get',
    cache: 'default'
}
fetch(`http://viacep.com.br/ws/${idCep}/json`, options)
.then(response => {response.json()
    .then(data => atribuirCampos(data))  
})
.catch(e => console.log("Deu erro: " + e))
})

function atribuirCampos(data) {      
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
        }
    