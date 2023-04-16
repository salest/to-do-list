function Sidebar(showHome, showToday, showThisWeek, showFinished, showCancelled){
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
    //Projects
    const projectsTitle = document.createElement('h2');
    projectsTitle.innerText = "Projects";
    projectsTitle.classList.add("sidebar-title");
    options.appendChild(projectsTitle);

    const projectOptions = document.createElement('ul');
    projectOptions.id = "project-list";
    const addProjectOption = document.createElement('li');
    addProjectOption.classList.add('sidebar-option', 'project-option');
    addProjectOption.innerText = "+ Project";
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
        console.log(`clicked ${finishedList.id}`);
    });
    projectOptions.appendChild(finishedList);
    //Cancelled List 
    const cancelledList = document.createElement('li');
    cancelledList.classList.add('sidebar-option', 'project-option');
    cancelledList.innerHTML = "Cancelled Tasks";
    cancelledList.id = "cancelled-list";
    cancelledList.addEventListener('click', () => {
        console.log(`clicked ${cancelledList.id}`);
    });
    projectOptions.appendChild(cancelledList);

    sidebar.append(options);
    return sidebar;
}

function addProject(project){
    //Open modal to add project
    const projectList = document.getElementById('project-list');
    const newProject = document.createElement('li');
    newProject.innerText = "test-project";
    newProject.classList.add('sidebar-option', 'project-option');
    projectList.appendChild(newProject);
    newProject.classList.add('sidebar-option');
}

function openProjectModal(){
    const modal = document.getElementById('add-project-modal');
    modal.style.display = "block";
}

export default Sidebar;