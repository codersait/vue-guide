const vm = new Vue({ //vm (short for ViewModel) to refer to our Vue instance. 
    template: `
    <div class= "app">
    <h1 v-if="title">Welcome to {{title}}</h1>
    <p>{{user.name}} {{user.lastname}}</p>
    </div>

    `,
    el: '#app',
    data: {
        user: { name: 'sait', lastname: 'ibrahim' },
        title: 'Vue'
    }
})


