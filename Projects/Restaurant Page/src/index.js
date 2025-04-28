import "./styles.css"
import { top_bar } from "./top_bar"
import { home } from "./home"
import { menu } from "./menu";
import { contact } from "./contact";

function clear_content_container() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

top_bar.render_top_bar();
home.render_home();

top_bar.buttons.forEach((button) => {
    button.addEventListener('click', () => {
        top_bar.change_selected_button(button);
        const actual_button = top_bar.check_selected_button();
        
        clear_content_container();
        if(actual_button === 'HOME')
            home.render_home();
        else if(actual_button === 'MENU')
            menu.render_menu();
        else if(actual_button === 'CONTACT')
            contact.render_contact();
    })
});
