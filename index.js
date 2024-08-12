const addNewTask = document.getElementById('newTask');
const addBtn =document.getElementById('addBtn');
const list = document.getElementById('Tasks');


function addTask(){

    const newTask =addNewTask.value;
    addNewTask.value=' ';


    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    let Task = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(Task);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    Task.textContent = newTask;
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';

    list.append(listItem);

    deleteBtn.addEventListener('click',function(){
        list.removeChild(listItem);
    })


    editBtn.addEventListener('click', function () {
        addNewTask.value = Task.textContent;
        list.removeChild(listItem);
    });

}


addBtn.addEventListener('click',addTask);