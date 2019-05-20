class View {
    //essa classe vai ser tipo uma classe abstrata pai para MensagemView e NegociacoesView

    constructor(elemento) {

        this._elemento = elemento;
    }

    template(){
        throw new Error('O método "template()" deve ser implementado.');
        //as classes filhas lançarão essa exceção caso uma delas não implementarem esse método
    }

    update(model) {

      this._elemento.innerHTML = this.template(model);
    }
}