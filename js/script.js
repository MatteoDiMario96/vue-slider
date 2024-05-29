const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            slides: [
                {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        isActive: true,
                        class: "isActive",
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        isActive: false,
                        class: "noActive",
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        isActive: false,
                        class: "noActive",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        isActive: false,
                        class: "noActive",
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        isActive: false,
                        class: "noActive",
                    }
                ]
        }
    },
    methods: {
        nextSlide() {
            const currentIndex = this.slides.findIndex(slide => slide.isActive);
            this.slides[currentIndex].isActive = false;
            this.slides[currentIndex].class = "noActive"
            if(currentIndex < this.slides.length - 1){
                this.slides[currentIndex + 1].isActive = true;
                this.slides[currentIndex + 1].class = "isActive";
            }else{
                this.slides[0].isActive = true;
                this.slides[0].class = "isActive";
            }
            
            
        },
        prevSlide() {
            const currentIndex = this.slides.findIndex(slide => slide.isActive);
            this.slides[currentIndex].isActive = false;
            this.slides[currentIndex].class = "noActive"
            if(currentIndex > 0){
                this.slides[currentIndex - 1 ].isActive = true;
                this.slides[currentIndex - 1].class = "isActive";
            }else{
                this.slides[this.slides.length - 1].isActive = true;
                this.slides[this.slides.length - 1].class = "isActive";
            }           
        },
        aggiungiClasse:function( elemento ){
            const currentIndex = this.slides.findIndex(slide => slide.isActive);
            if(this.slides[currentIndex].class === "isActive"){
                this.slide.classList.add("isActive");
            }else{
                this.slide.classList.remove("isActive");
            }
            }
    }
}).mount('#app')