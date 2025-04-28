class ct {
    render_contact() {
        const content = document.querySelector('#content');
        const contact_container = document.createElement('div');
        contact_container.className = 'contact_container';
        const title = document.createElement('h1');
        title.innerText = 'Unfortunately you need to travel to Japan to visit Pokémon Café';
        const img = document.createElement('img');
        img.style.width = 450;
        img.style.height = 400;
        img.src = 'https://i.pinimg.com/originals/9e/c5/6a/9ec56a4169037908150432324a3c6430.gif';
        contact_container.appendChild(title);
        contact_container.appendChild(img);
        content.appendChild(contact_container);
    }
}

export const contact = new ct;