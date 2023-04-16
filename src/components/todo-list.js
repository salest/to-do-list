function TodoList(){
    const div = document.createElement('div');
    div.id = "todo-list";
    div.classList.add('list-display');
    return div;
}


export {TodoList};