const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const CancelEditBtn = document.querySelector("#cancel-edit-btn");

//GUARDANDO UM TITLE ANTIGO prt1
    let oldInputValue;


//FUNCIONALIDADES DO ARQUIVO DO TO-DO
const saveTodo =(text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);


    //BOTÕES-TODO (add, editar e remover):
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);


    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);


    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();

};

    const updateToDo = (text) => {
        const todos = document.querySelectorAll(".todos");

        todos.forEach((todos) => {
            let todoTitle = todos.querySelector("h3")

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        };
        })

    };


    //ESCONDENDO OS DADOS DO EDIT, TODO E LISTA (DEIXAR O USER MENOS DODÓI DA CABEÇA COM TANTAS INFORMAÇÕES)
    const toggleForms = () => {
        editForm.classList.toggle("hide");
        todoForm.classList.toggle("hide");
        todoList.classList.toggle("hide");
    };

todoForm.addEventListener("submit", (bott) => {
    bott.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    };
});


    //CLICK DOS BOTÕES
    document.addEventListener("click", (bott) => {
        const targeEl = bott.target;
        const parentEl = targeEl.closest("div");
        let todoTitle;


        if(parentEl && parentEl.querySelector("h3")){
            todoTitle = parentEl.querySelector("h3").innerText;
        };


        if(targeEl.classList.contains("finish-todo")){
            parentEl.classList.toggle("done");
        }

        if(targeEl.classList.contains("remove-todo")){
            parentEl.remove();
        }

        if(targeEl.classList.contains("edit-todo")){
            toggleForms();
            //GUARDANDO DADOS ANTIGOS DO TITLE prt2
            editInput.value = todoTitle;
            oldInputValue = todoTitle;
        }
    })

    //BOTÃO DE CANCELAR
    CancelEditBtn.addEventListener("click", (bott) => {
        bott.preventDefault();

        toggleForms();
    });

    editForm.addEventListener("submit", (butt) => {
        butt.preventDefault();

        const editInputValue = editInput.value;

        if(editInputValue){
            updateToDo(editFormValue);
        };

        toggleForms();
    });