class MensagemView extends View {

    constructor(elemento){
        super(elemento);
    }
    template(model){
        return model.texto ? `<p class="alert" alert-info>${model.texto}</p>`: `<p></p>`;
        //se model.texto for vazio, devolve `<p></p>`, se não, devolve `<p class="alert" alert-info>${model.texto}</p>`
    }

}