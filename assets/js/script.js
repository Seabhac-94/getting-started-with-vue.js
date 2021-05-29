var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        explanation: "Small webpage using the basics of Vue.js, <code> shows the code in script.js:",
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        placeholder: "Type true or false",
        seen: ""
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todo_list: [
            { text: "Learn a bit of Vue.js" },
            { text: "Update github repository" },
            { text: "Learn more Vue.." }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "",
        placeholder: "Type in me!"
    }
});

// app 7

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Meat' }
        ]
    }
});
