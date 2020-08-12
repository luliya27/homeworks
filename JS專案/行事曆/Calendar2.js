into();

// 記事
// function into() {
//     SaveData()
//     LoadData()
// }


// function SaveData() {
//     // let temp = document.getElementById('input').value;
//     let temp = {

//     }
//     localStorage.setItem('Name', JSON.stringify(temp));
// }

// function LoadData() {
//     let temp = JSON.parse(localStorage.getItem('Name'));
//     document.getElementById('text').innerText = temp.CName;
// }

function EditTodoItem() {
    let date = document.querySelector('#info-area #info-date').value;
    let todoItem = document.querySelector('#info-area #info-todo-item').value;

    let todoList = JSON.parse(localStorage.getItem(date));

    console.log(currentIndex);

    todoList[currentIndex] = { title: todoItem };

    localStorage.setItem(date, JSON.stringify(todoList));
    Init();
}

function DeleteTodoItem() {
    let date = document.querySelector('#info-area #info-date').value;

    let todoList = JSON.parse(localStorage.getItem(date));

    todoList.splice(currentIndex, 1);

    localStorage.setItem(date, JSON.stringify(todoList));
    Init();
}
