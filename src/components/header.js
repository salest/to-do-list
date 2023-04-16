function Header(){
    const header = document.createElement('header');
    let logo = document.createElement('i');
    logo.classList.add("fa-solid", "fa-list-check", "logo");
    header.append(logo);
    const title = document.createElement('h1');
    title.innerText = "Todo List";
    title.classList.add('header-title');
    header.appendChild(title);
    header.id = "header";
    return header;
}

export default Header;