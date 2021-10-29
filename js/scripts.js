Vue.config.devtools = true

const vueApp = new Vue({
    el: "#app",
    data: {
        imageList:[
            {
                source: 'img/01.jpg',
                title: 'Svezia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                source: 'img/02.jpg',
                title: 'Svizzera',
                description: 'Lorem ipsum',
            },
            {
                source: 'img/03.jpg',
                title: 'Gran Bretagna',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                source: 'img/04.jpg',
                title: 'Germania',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                source: 'img/05.jpg',
                title: 'Paradise',
                description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
        indiceCorrente: 0,
    },
    methods: {
        onClickPrev() {
            let nuovoIndice = this.indiceCorrente - 1;

            if (nuovoIndice < 0) {
                nuovoIndice = this.imageList.length - 1;
            }
        
            this.indiceCorrente = nuovoIndice
        },
        onClickNext() {
            let nuovoIndice = this.indiceCorrente + 1;

            if (nuovoIndice > this.imageList.length - 1) {
                nuovoIndice = 0;
            }

            this.indiceCorrente = nuovoIndice
        },
    }
})