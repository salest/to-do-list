import Sidebar from "./sidebar";
import { TodoList } from "./todo-list";


function MainSection(showHome, showToday, showThisWeek, showFinished) {
    /*
        Creates div component to hold Sidebar and the current main section view, default is Home page.
    */
    const section = document.createElement('div');
    section.id = "main-section";
    const sidebar = Sidebar(showHome, showToday, showThisWeek, showFinished);
    section.appendChild(sidebar);
    const currentPage = document.createElement('div');
    currentPage.id = "current-page";
    const list = TodoList();
    currentPage.appendChild(list);
    section.append(currentPage);
      
    return section;
}


export {MainSection};