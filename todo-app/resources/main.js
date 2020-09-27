

document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if (value) {
        addItemTodo(value);
        document.getElementById('item').value = '';
    }
});


function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}



// function addOption() {

//     if (i === 0) {

//         var option = document.createElement("option");
//         option.text = 'am';
//         option.value = 1;
//         choice.appendChild(option);

//         var option = document.createElement("option");
//         option.text = 'pm';
//         option.value = 2;
//         choice.appendChild(option);

//         var option = document.createElement("option");
//         option.text = 'n';
//         option.value = 3;
//         choice.appendChild(option);
//     }

//     i = i + 1;
// }

// var i = 0;

function addItemTodo(text) {
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    //削除ボタン
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.addEventListener('click', removeItem);
    remove.insertAdjacentHTML('afterbegin', '<i class="fas fa-bomb"></i>');

    //select
    var choice = document.createElement('select');

    var option = document.createElement("option");
    option.text = 'am';
    option.value = 1;
    choice.appendChild(option);

    var option = document.createElement("option");
    option.text = 'pm';
    option.value = 2;
    choice.appendChild(option);

    var option = document.createElement("option");
    option.text = 'n';
    option.value = 3;
    choice.appendChild(option);
    //---


    buttons.appendChild(remove);
    buttons.appendChild(choice);
    item.appendChild(buttons);
    list.appendChild(item);

}

