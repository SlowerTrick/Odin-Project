class mn {
    render_menu() {
        const content = document.querySelector('#content');
        const menu_container = document.createElement('div');
        menu_container.className = 'menu_container';

        this.#create_menu_item('Eevee', 'https://media.pocketmonsters.net/news/7107/2.jpg', menu_container);
        this.#create_menu_item('Coffee', 'https://www.pokemon-cafe.jp/en/photo_drink_choice01.jpg', menu_container);
        this.#create_menu_item('Gengar', 'https://tdrexplorer.com/wp-content/uploads/2022/09/gengar-menu-pokemon-cafe-featured-image.png', menu_container);
        this.#create_menu_item('Kanto Party', 'https://grapeejapan.com/wp-content/uploads/pikachu-cafe.jpg', menu_container);
        content.appendChild(menu_container);
    }

    #create_menu_item(name, link, menu_container) {
        const item = document.createElement('div');
        item.className = 'menu_item';
        const title = document.createElement('h1');
        title.textContent = `${name} Meal`;
        const img = document.createElement('img');
        img.style.borderRadius = '20px'
        img.src = link;
        img.height = 200;
        img.width = 200;
        item.appendChild(title);
        item.appendChild(img);
        menu_container.appendChild(item);
    }
}

export const menu = new mn;