function toggleMenu() {  
    const menu = document.getElementById('menu');  
    menu.classList.toggle('show');  
}

const url = 'data/members.json';  
const gridDirectory = document.querySelector('#gridDirectory');  
const display = document.querySelector("#gridArticle");  

async function getDirectory() {  
    const response = await fetch(url);  
    const data = await response.json();  
    displayDirectory(data.companies);  
}  

const displayDirectory = companies => {  
    gridDirectory.innerHTML = ''; // Clear existing content  
    companies.forEach(company => {  
        let cardMem = document.createElement('section');  
        cardMem.classList.add('cardMem');  

        let name = document.createElement('h2');  
        let address = document.createElement('p');  
        let phone = document.createElement('p');  
        let website = document.createElement('a');  
        let membership = document.createElement('p');  

        name.textContent = company.name;  
        address.textContent = company.address;  
        phone.textContent = company.phone;  
        membership.textContent = `Membership: ${company.membership}`;  

        website.textContent = company.websiteURL;  
        website.href = company.websiteURL;  
        website.setAttribute('target', '_blank');  

        cardMem.appendChild(name);  
        cardMem.appendChild(address);  
        cardMem.appendChild(phone);  
        cardMem.appendChild(membership);  
        cardMem.appendChild(website);  

        gridDirectory.appendChild(cardMem);  
    });  
}  

getDirectory();  

const gridButton = document.querySelector("#gridButton");  
const listButton = document.querySelector("#listButton");  

gridButton.addEventListener("click", () => {  
    display.classList.remove("listView");  
    display.classList.add("gridView");  
});  

listButton.addEventListener("click", () => {  
    display.classList.remove("gridView");  
    display.classList.add("listView");  
});