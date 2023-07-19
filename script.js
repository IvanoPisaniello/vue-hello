const app = Vue.createApp({
    data() {
        return {
            welcMessage: "benvenuto su vue!",
            titleClass: "d-inline-block",
            srcImg: "img/Vue.js_Logo_2.svg.png",
            nameMessage: "Inserisci il tuo Nome per entrare!",
            imageClass: "size-img",
            nameInput: "",
            mailInput: "",
            mailAlert: "Inserisci la tua Mail per Entrare!",
            messageWelcome: "",
            mailWelcome: "",
        }
    },
    methods: {
        enter() {
            this.messageWelcome = "benvenuto:" + " " + this.nameInput
            this.mailWelcome = "sei entrato con questa mail:" + " " + this.mailInput
        }
    }
})
app.mount("#app")