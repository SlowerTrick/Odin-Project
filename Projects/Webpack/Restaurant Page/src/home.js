class hm {
    render_home() {
        const content = document.querySelector('#content');
        const home_container = document.createElement('div');
        home_container.className = 'home_container';

        const title = document.createElement('h1');
        const img = document.createElement('img');
        title.innerText = 'Welcome to Pokémon Café!';
        //https://cafemix.pokemon.com/assets/images/home/staff/items/fluffy-eevee-pancakes.png
        img.src = 'https://cafemix.pokemon.com/assets/images/home/cafe/pokemon/pikachu.png';
        img.style.width = '450px';
        img.style.height = '400px';

        home_container.appendChild(title);
        home_container.appendChild(img);

        content.appendChild(home_container);
    }
}

export const home = new hm;