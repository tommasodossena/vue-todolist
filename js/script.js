var vm = new Vue(
    {
        el: "#root",
        data: {
            tasks: 
            [
                "Svolgere esercizio to-do list utilizzando Vue.js",
                "Riscrivere i concetti base appresi a lezione",
                "Studiare documentazione Vue.js"
            ],
            newTask: "",
        },
        methods: {
            addTask: function() {
                if ( this.newTask != "" ) {
                    this.tasks.push(this.newTask);
                    this.newTask = "";   
                }
            },
            deleteTask: function(taskIndex) {
                this.tasks.splice(taskIndex, 1);
            }
        }
    }
);