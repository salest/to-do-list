function AddModal(addTodoItem, id) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = "add-project-modal";
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    //form
    const modalForm = document.createElement('form');
    modalForm.id = "add-form";
    const textLabel = document.createElement('label');
    const textInput = document.createElement('textarea');
    textLabel.for = "todo-item-name";
    textLabel.innerText = "Add a new Todo Item!";
    textInput.id = "todo-item-name";
    textInput.required = true;
    textInput.rows = "6";
    textInput.cols = "80";
    textInput.placeholder = "Please enter your item here!";
    textInput.name = "todo-item-name";
    textInput.classList.add('textarea');

    const datePicker = document.createElement('input');
    datePicker.type = "date";
    datePicker.required = true;

    const modalOptions = document.createElement('div');
    modalOptions.classList.add('modal-options');
    const modalSumbit = document.createElement('input');
    modalSumbit.type = "submit";
    modalSumbit.value = "Create Item";
    const modalClose = document.createElement('span');
    modalClose.innerHTML = "&times;";
    modalClose.classList.add("close");
    modalOptions.appendChild(modalSumbit);
    modalOptions.appendChild(modalClose);

    modalForm.appendChild(textLabel);
    modalForm.appendChild(textInput);
    modalForm.appendChild(datePicker);
    modalForm.appendChild(modalOptions);

    //Append to modal
    modalContent.appendChild(modalForm);
    modal.appendChild(modalContent);


    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    modalForm.addEventListener('submit', (e) => {
        modal.style.display = "none";
        const text = textInput.value;
        const date = datePicker.value;
        addTodoItem(text, date, id);
        modalForm.reset();
        e.preventDefault();
    });

    return modal;
}




export default AddModal;