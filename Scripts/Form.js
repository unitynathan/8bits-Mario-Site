class Form{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }
    displaySucess(){
        this.form.innerHTML = this.settings.sucess;}

    displayError(){
        this.form.innerHTML = this.settings.error;}

        init(){
            if(this.form) this.formButton.addEventListener("click", ()=> this.displaySucess());
        }
    }

    const form = new Form({form : "[data-form]", button: "[data-button]" ,
     sucess: "<h1 class = 'sucess'>Mensagem enviada com sucesso, Obrigado!</h1>" , 
     error: "<h1 class ='error'> Estamos com problemas, desculpe sua mensagem não foi enviada.</h1>"});
     form.init();