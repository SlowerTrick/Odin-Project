import { add, sub } from "date-fns";
import { dailies, tasks } from "./todo_manager.js"
import { tTodo } from "./todo.js";
import { format } from "date-fns";

class tSide_bar {
    constructor()
    {
        this.content_container = document.querySelector('.content');
        const side_bar = document.querySelector('.side_bar');
        const side_items = Array.from(side_bar.children);

        side_items.forEach((item) => {
            item.addEventListener("click", () => {
                switch(item.id)
                {
                    case 'dailies':
                        this.#load_dailies();
                        break;

                    case 'tasks':
                        this.#load_tasks();
                        break;

                    case 'timer':
                        this.#load_timer();
                        break;
                }
            })
        });
    }
    #load_dailies()
    {
        console.log("Dailies tab!");
        dailies.create_items();
        this.#clear_content_dom();
        this.#append_all_todo_dom(dailies, 'dailies');
    }
    #load_tasks()
    {
        console.log("Tasks tab!");
        tasks.create_items();
        this.#clear_content_dom();
        this.#append_all_todo_dom(tasks, 'tasks');
    }
    #load_timer()
    {
        console.log("Timer tab!");
        this.#clear_content_dom();
    }
    #clear_content_dom()
    {
        this.content_container.innerHTML = '';
    }
    #append_all_todo_dom(selected_tab, tab_name)
    {
        const create = this.#create_element;
        const array = selected_tab.get_array_data();
        array.forEach((element, i) => {
            const { name, priority, date, details, status } = element;

            const content = create('div', this.content_container, 'content_container');
            if(priority === 'High') content.classList.add('priority_high');
            else if(priority === 'Medium') content.classList.add('priority_medium');
            else if(priority === 'Low') content.classList.add('priority_low');

            const check_box = create('button', content);
            status === 'unchecked' ? check_box.classList.add('check_box_unchecked') : check_box.classList.add('check_box_checked');
            check_box.addEventListener('click', () => {
                selected_tab.change_status_todo(i);
            
                if (check_box.classList.contains('check_box_unchecked')) {
                    check_box.classList.remove('check_box_unchecked');
                    check_box.classList.add('check_box_checked');
                } else {
                    check_box.classList.remove('check_box_checked');
                    check_box.classList.add('check_box_unchecked');
                }
            });
            
            const todo_name = create('p', content, 'todo_title', name);
            const details_button = create('button', content, 'details_button', 'Details');
            details_button.addEventListener('click', () => {
                this.#append_details(name, priority, date, details, content);
            })
            const delete_button = create('img', content, 'delete_todo');
            delete_button.src = 'https://cdn-icons-png.flaticon.com/512/542/542724.png';
            delete_button.addEventListener('click', () => {
                if(tab_name === 'dailies')
                    dailies.remove_item(i);
                else if(tab_name === 'tasks')
                    tasks.remove_item(i);
                if(tab_name == 'dailies') this.#load_dailies();
                else if(tab_name == 'tasks') this.#load_tasks();
            });
            const todo_date = create('p', content, 'todo_date', date);
        });
        this.#append_new_todo_button(tab_name);
    }
    #append_details(name, priority, date, details, parent_element)
    {
        const create = this.#create_element;

        const existing_details = this.content_container.querySelector('.details_container');
        if (existing_details)
        {
            this.content_container.removeChild(existing_details);
            return;
        }

        const details_container = create('div', '', 'details_container');

        create('p', details_container, '', `Title:\t${name}`);
        create('p', details_container, '', `Priority:\t${priority}`);
        create('p', details_container, '', `Date:\t${date}`);
        create('p', details_container, '', `Details:\t${details}`);

        parent_element.insertAdjacentElement('afterend', details_container);
    }
    #append_new_todo_button(tab_name)
    {
        const create = this.#create_element;
        const new_todo_container = create('div', this.content_container, 'new_todo_container');
        const new_todo = create('button', new_todo_container, 'new_todo');
        const text = create('p', new_todo);
        text.innerText = '+';
        new_todo.addEventListener('click', () => {
            this.content_container.removeChild(new_todo_container);
            this.#append_todo_form_dom(tab_name);
        });
    }
    #append_todo_form_dom(tab_name)
    {
        const create = this.#create_element;
        const todo_form_container = create('form', this.content_container, 'todo_form', '', 'todo_form');

        const title_label = create('label', todo_form_container, '', 'Title:');
        const title = create('input', todo_form_container, '', '', 'todo_form_title');
        
        const details_label = create('label', todo_form_container, '', 'Details:');
        const details = create('textarea', todo_form_container, '', '', 'todo_form_details');
        
        const priority_container = create('div', todo_form_container, 'priority_container');
        const priority_label = create('label', priority_container, '', 'Priority:');
        const priority_content = create('select', priority_container, 'priority_content');
        const option_high = create('option', priority_content, '', 'High');
        const option_medium = create('option', priority_content, '', 'Medium');
        const option_low = create('option', priority_content, '', 'Low');
        
        const date_container = create('div', todo_form_container, 'date_container');
        const date_label = create('label', date_container, '', 'Due Date:');
        const date_picker = create('input', date_container, '', '', 'datepicker');
        date_picker.type = 'date'

        const buttons_div = create('div', todo_form_container, 'buttons_container');
        const add_button = create('button', buttons_div, 'add_button', 'Add', '', 'button');
        add_button.addEventListener('click', () => {
            const todo = new tTodo(
                title.value, 
                priority_content.value, 
                date_picker.value ? date_picker.value : format(new Date(), 'yyyy-MM-dd'), 
                details.value, 
                'unchecked'
            );
            if(tab_name === 'dailies')
            {
                dailies.push_item(todo);
                this.#load_dailies();
            }
            else if(tab_name === 'tasks')
            {
                tasks.push_item(todo);
                this.#load_tasks();
            }
        });

        const cancel_button = create('button', buttons_div, 'cancel_button', 'Cancel', '', 'button');
        cancel_button.addEventListener('click', () => {
           this.content_container.removeChild(todo_form_container);
           this.#append_new_todo_button(tab_name);
        });
    }
    #create_element(type, parent, class_name='', content='', id='', button_type='')
    {
        if (!type) throw new Error('Element type is required');

        const element = document.createElement(type);
        if(class_name) element.classList.add(class_name);
        if(content) element.innerText = content;
        if(id) element.id = id;
        if(button_type) element.type = button_type;
        if (parent) parent.appendChild(element);
        return element;
    }
}

export const side_bar = new tSide_bar();