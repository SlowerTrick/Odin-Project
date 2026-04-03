import { tTodo } from "./todo.js";

class TodoManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.todo_array = [];
    }

    create_items() {
        const items = JSON.parse(localStorage.getItem(this.storageKey));
        this.todo_array = items ? items.map(obj => new tTodo(obj.name, obj.priority, obj.date, obj.details, obj.status)) : [];
        this.#sort_array();
    }

    push_item(item) {
        this.todo_array.push(item);
        this.#save();
    }

    remove_item(i) {
        this.todo_array.splice(i, 1);
        this.#save();
    }

    change_status_todo(i) {
        this.todo_array[i].change_status_todo();
        this.#save();
    }

    get_array_data() {
        return this.todo_array.map(todo => todo.get_data_todo());
    }

    print_items(label = "Todo list:") {
        console.log(label);
        this.todo_array.forEach(todo => todo.print_todo());
        console.log("\n");
    }

    #sort_array() {
        this.todo_array.sort((a, b) => {
            const data_a = a.get_data_todo();
            const data_b = b.get_data_todo();

            const priority_order = { High: 3, Medium: 2, Low: 1 };
            return (priority_order[data_b.priority] || 0) - (priority_order[data_a.priority] || 0);
        });
    }

    #save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.todo_array));
    }
}

class tDaily extends TodoManager {
    constructor() {
        super("dailies");
    }

    print_dailies() {
        this.print_items("Dailies list:");
    }
}

class tTask extends TodoManager {
    constructor() {
        super("tasks");
    }

    print_tasks() {
        this.print_items("Tasks list:");
    }
}

export const dailies = new tDaily();
export const tasks = new tTask();