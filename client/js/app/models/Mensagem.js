class Mensagem{
    constructor(texto=''){//isso significa q se vc não passar nada no construtor da classe na hora de instanciá-la, a mensagem padrão será ''
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}