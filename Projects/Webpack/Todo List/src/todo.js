import { format } from "date-fns";

export class tTodo 
{
    constructor(name, priority, date, details, status)
    {
        this.name = name;
        this.priority = priority;
        this.date = date;
        this.details = details;
        this.status = status;
    } 
    print_todo()
    {
        console.log(this);
    }
    get_data_todo()
    {
        return {
            name: this.name,
            priority: this.priority,
            date: this.date,
            details: this.details,
            status: this.status
        };
    }
    change_status_todo()
    {
        this.status === 'unchecked' ? this.status = 'checked' : this.status = 'unchecked';
    }
}