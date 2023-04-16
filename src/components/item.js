// Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands' 

function ItemComponent(text, date, id, finishFunction, deleteFunction){
    const div = document.createElement('div');
    div.classList.add('item');
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-div');
    const itemText = document.createElement('p');
    itemText.innerText = text;
    itemText.classList.add('item-text');
    const itemDate = document.createElement('p');
    itemDate.innerText = date;
    infoDiv.appendChild(itemText);
    infoDiv.appendChild(itemDate);

    //Buttons
    const buttons = document.createElement('div');
    buttons.classList.add('todo-options');
    const finishButton = document.createElement('button');
    const checkMark = document.createElement('i');
    checkMark.classList.add('fa-solid', 'fa-check', 'todo-button');
    finishButton.appendChild(checkMark);
    finishButton.type = "button";
    finishButton.title = "finishButton";
    finishButton.id = id + "-finish";
    finishButton.addEventListener('click', () => {
        finishFunction(id);
    });

    const deleteButton = document.createElement('button');
    const deleteMark = document.createElement('i');
    deleteMark.classList.add('fa-solid', 'fa-trash', 'todo-button');
    deleteButton.appendChild(deleteMark);
    deleteButton.type = "button";
    deleteButton.title = "delete-button";
    deleteButton.id = id + "-delete";
    deleteButton.addEventListener('click', () => {
        deleteFunction(id);
    });
    buttons.appendChild(finishButton);
    buttons.appendChild(deleteButton);

    div.appendChild(infoDiv);
    div.appendChild(buttons);
    return div;
}

export default ItemComponent;