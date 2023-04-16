function Footer(){
    const footer = document.createElement('div');
    footer.id = "footer";
    const text = document.createElement('p');
    text.innerText = "Copyright by Tevin Sales";
    footer.appendChild(text);
    return footer;
}

export default Footer;