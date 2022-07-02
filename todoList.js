const formElem = document.querySelector('.add')
const InputElem = document.querySelector('input')
const ulElem = document.querySelector('.list-group')
let todos = []

window.addEventListener('load', () => {
    InputElem.focus()
})

formElem.addEventListener('submit', e => {
    e.preventDefault()
})

InputElem.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
         addANewTodoToArray()
    }
})

function addANewTodoToArray () {
       let newTodo = InputElem.value
       todos.push(newTodo)
       InputElem.value = ''
       AddTodosToUi(todos)
    }
    
function AddTodosToUi (todosArray) {
    ulElem.innerHTML = ''
    todosArray.map(eachTodo => {
        ulElem.insertAdjacentHTML('beforeend', `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${eachTodo}</span>
        <i onClick="deleteATodo(event)" class="fa fa-trash-o delete"></i>
        </li>
        `)
    })
}

function deleteATodo (e) {
let todo = e.target.parentElement
todo.remove()
}