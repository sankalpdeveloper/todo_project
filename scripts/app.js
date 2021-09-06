const dataApi = 'Your Api Key';

const todoTitle = document.querySelector('#todotitle')
const addBtn = document.querySelector('.addbtn')
const description = document.querySelector('#description')
const getKey = document.querySelector('#getkey')
const todoGet = document.querySelector('.todo-get')
const getTodoBtn = document.querySelector('.gettodo')

function sendTodo(){

    let data = {"items": [{"key": todoTitle.value,"value":description.value}]}

    axios.put('https://database.deta.sh/v1/c05huraa/database/items',data
     ,{headers: {
        'X-API-Key': dataApi
      }}).then((result) => {
       console.log(result);      
    }).catch((err) => {
        console.log(err);
    });
    todoTitle.value = ''
    description.value = ''
}

function getTodoByKey(){

    let key = getKey.value;

    axios.get(`https://database.deta.sh/v1/c05huraa/database/items/${key}`
     ,{headers: {
        'X-API-Key':'c05huraa_4DQwzxpsAwUwi6LBZDnY32TWmcXZ4Ff6'
      }}).then((result) => {
          console.log(result);
        todoGet.innerHTML = `<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">${result.data.key}</h1>
          <p class="lead">${result.data.value}</p>
        </div>
      </div>`;      
    }).catch((err) => {
        console.log(err);
    });

    
}


addBtn.addEventListener('click',sendTodo)

getTodoBtn.addEventListener('click',getTodoByKey)

