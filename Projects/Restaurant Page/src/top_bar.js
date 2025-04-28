class tb {
    #button_selected = 'home';

    render_top_bar() {
        const top_bar = document.querySelector('.top_bar');
        const buttons_names = ['HOME', 'MENU', 'CONTACT'];
        this.buttons = [];

        const title = document.createElement('img');
        title.src = 'https://imguscdn.gamespress.com/cdn/files/PokemonAmerica/2020/06/17133132-a05d9162-7a7b-4588-86d6-493941a9e73e/PokemonCafeMix_Logo.png?w=240&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&sky=4895954d3be7b8d85033bf3a62caf482491eedb4c6995b67514e9588bd2088c2';
        top_bar.appendChild(title);

        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.gap = '15px';
        buttons_names.forEach((element) => {
            const button = this.#create_button(element);
            this.buttons.push(button);
            div.appendChild(button);
        })
        top_bar.appendChild(div);
    }

    #create_button(name) {
        const button = document.createElement('button');
        button.className = name;
        button.innerText = name;
        return button;
    }

    change_selected_button(button) {
        this.#button_selected = button.className;
    }

    check_selected_button() {
        return this.#button_selected;
    }
}

export const top_bar = new tb;