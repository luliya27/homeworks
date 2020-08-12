into();
SaveData();
LoadData();
// 記事
// function into() {
//     SaveData()
//     LoadData()
// }


function SaveData() {
    // 如果key一樣的時候，他會覆蓋原本的value
    let temp = {
        Name: value,
        CName: value,
        Color: value
    }
    // localStorage 只能放字串
    localStorage.setItem('Name',JSON.stringify(temp));
}

function LoadData() {
    let temp = JSON.parse(localStorage.getItem('Name'));
    // 改變顏色
    document.getElementById('text').innerText = temp.CName;
    document.getElementById('text').innerText = temp.Color;
}

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
