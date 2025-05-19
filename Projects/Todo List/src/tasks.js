import { tTodo } from "./todo.js"

class tTask {
    constructor() {
        this.tasks_array = [];
    }
    create_tasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        this.tasks_array = 
            tasks ? tasks.map(obj => new tTodo(obj.name, obj.priority, obj.date, obj.details, obj.status)) : [];
        this.#sort_array();
    }
    push_task(task) {
        this.tasks_array.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.tasks_array));
    }
    remove_task(i) {
        this.tasks_array.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks_array));
    }
    get_array_data() {
        return this.tasks_array.map(todo => todo.get_data_todo());
    }
    change_status_todo(i){
        this.tasks_array[i].change_status_todo();
        localStorage.setItem("tasks", JSON.stringify(this.tasks_array));
    }
    print_tasks() {
        console.log("tasks list:");
        this.tasks_array.forEach(todo => {
            todo.print_todo();
        });
        console.log("\n");
    }
    #sort_array() {
        this.tasks_array.sort((a, b) => {
            const data_a = a.get_data_todo();
            const data_b = b.get_data_todo();

            const priority_order = { High: 3, Medium: 2, Low: 1 };

            const priority_a = priority_order[data_a.priority] || 0;
            const priority_b = priority_order[data_b.priority] || 0;

            return priority_b - priority_a; // ordem decrescente: High > Medium > Low
        });
    }
}

export const tasks = new tTask;