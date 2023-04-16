//Style
import './style.css';
//Jquery
import $ from 'jquery';
//Components
import Header from './components/header';
import { MainSection } from './components/main-section';
import { TodoList } from './components/todo-list';
import { TodayList } from './components/today-list';
import Footer from './components/footer';
import ItemComponent from "./components/item";
import TodoItem from "./app/todo-item";
import AddModal from "./components/add-modal";
// Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


let id = 0;
const itemList = [new TodoItem("test1", "2023-04-13", id++), new TodoItem("test2", "2023-04-15", id++), new TodoItem("test3", "2023-04-14", id++)];
const finishedList = [];
const cancelledList = [];
let currentView = "Home";

/*
    Function to create components and append them to the body
*/

function displayPage() {
    const box = document.createElement('div');
    box.id = "box";
    const header = Header();
    const mainSection = MainSection(showHome, showToday, showThisWeek, showFinished, showCancelled);
    const footer = Footer();
    box.appendChild(header);
    box.appendChild(mainSection);
    box.appendChild(footer);
    $("body").append(box);
    const addModal = AddModal(addTodoItem, id);
    $("body").append(addModal);
}

/*
    Function to add new to do item to the main section list 
*/
function addTodoItem(item, date, id) {
    const itemId = `${item}-${id++}`;
    const newItem = new TodoItem(item, date, itemId);
    itemList.push(newItem);
    refreshCurrentView();
}

/*
 Function to remove list from todo list and add to finished or cancelled list
*/

function removeTodoItem(id, type) {
    for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i];
        if (item.id == id) {
            if (type == "finish") {
                finishedList.push(itemList[i]);
            }
            else if (type == "cancel") {
                cancelledList.push(itemList[i]);
            }
            itemList.splice(i, 1);
        }
    }
    refreshCurrentView();
}

/*
    Refreshes the current view of the page depending on the current filter
*/
function refreshCurrentView() {
    if (currentView == "Today") {
        showToday();
    }
    else if (currentView == "Week") {

    }
    else {
        showHome();
    }
}


/*
    Functions to pass to the Sidebar Component that shows the current itemList/finishedList/cancelledList and the date filtered lists
*/
function clearPage() {
    const page = document.getElementById("current-page");
    page.innerHTML = "";
    return page;
}

function createPageTitle(text) {
    const pageTitle = document.createElement('h1');
    pageTitle.innerText = text;
    pageTitle.classList.add('page-title');
    return pageTitle;
}

function showHome() {
    const page = clearPage();
    const list = TodoList();
    page.appendChild(createPageTitle("Home"));
    page.appendChild(list);
    currentView = "Home";

    refreshItemList(itemList, removeTodoItem);
}

function showToday() {
    const page = clearPage();
    const list = TodayList(itemList);
    page.appendChild(createPageTitle("Today's Tasks"));
    page.appendChild(list);
    currentView = "Today";
    refreshTodayList(itemList, removeTodoItem);
}

function showThisWeek() {
    const page = clearPage();
    currentView = "Week";
}

function showFinished() {
    const page = clearPage();
}

function showCancelled() {
    const page = clearPage();
}


function refreshItemList(itemList, removeTodoItem) {
    const div = document.getElementById("todo-list");
    if (!div) return;
    div.innerHTML = "";
    itemList.map((element) => {
        const newItem = ItemComponent(element.item, element.date, element.id, removeTodoItem, removeTodoItem);
        div.appendChild(newItem);
    });
}

function refreshTodayList(itemList, removeTodoItem) {
    const div = document.getElementById("today-list");
    if (!div) return;
    div.innerHTML = "";
    itemList.filter((item) => {
        const dateParse = new Date(Date.parse(item.date));
        if (dateParse.getDay() == new Date().getDay()) return item;
    })
        .map((element) => {
            const newItem = ItemComponent(element.item, element.date, element.id, removeTodoItem, removeTodoItem);
            div.appendChild(newItem);
        });
}

displayPage();
refreshCurrentView();
