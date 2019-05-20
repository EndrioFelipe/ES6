class DateHelper {

    constructor (){
        throw new Error("não dá pra instanciar");
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto){

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
        //O ˆ indica "começando com " e o $ "terminando com".

        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    }

}