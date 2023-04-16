function Sidebar(showHome, showToday, showThisWeek, showFinished){
    let sidebar = document.createElement('div');
    sidebar.id = "sidebar";

    const options = document.createElement('ul');
    const list = ['Home', 'Today', 'This Week'];
    const functionList = [showHome, showToday, showThisWeek];
    for(let i = 0; i < list.length; i++){
        const item = document.createElement('li');
        item.innerText = list[i];
        item.id = list[i];
        item.classList.add('sidebar-option');
        item.addEventListener('click', () => {
            functionList[i]();
        });
        options.append(item);
    }
    //Tasks
    const projectsTitle = document.createElement('h2');
    projectsTitle.innerText = "Other";
    projectsTitle.classList.add("sidebar-title");
    options.appendChild(projectsTitle);

    const projectOptions = document.createElement('ul');
    projectOptions.id = "project-list";
    const addProjectOption = document.createElement('li');
    addProjectOption.classList.add('sidebar-option', 'project-option');
    addProjectOption.innerText = "+ Tasks";
    addProjectOption.id = "btn-add-project";
    addProjectOption.addEventListener('click', () => openProjectModal());
    options.appendChild(projectOptions);
    projectOptions.appendChild(addProjectOption);
    //Finished list
    const finishedList = document.createElement('li');
    finishedList.classList.add('sidebar-option', 'project-option');
    finishedList.innerText = "Finished Tasks";
    finishedList.id = "finished-list";
    finishedList.addEventListener('click' , () => {
        showFinished();
    });
    options.appendChild(finishedList);
    sidebar.append(options);
    return sidebar;
}

function openProjectModal(){
    const modal = document.getElementById('add-project-modal');
    modal.style.display = "block";
}

export default Sidebar;