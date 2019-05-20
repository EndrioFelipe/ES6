class Negociacao{
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); //o javascript ainda não permite definir se uma variável pode ser apenas de leitura ou apenas de gravação ou ambos, usa-se a convenção de colocar o "_" antes da variável sabe-se lá o pq
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //isso congela todas as variáveis implícitas this, não deixando ninguém alterar essas variáveis
    }

    get volume() {

        return this._quantidade * this._valor;
    
    }
    
    get data() {
        return new Date(this._data.getTime());
        /*
        getTime de uma data retornará um número long com uma representação da data.
        Se digitarmos no Console n1.data.getTime(), ele retornará um número que representará a data.
        No construtor de Date(), este número será aceito para a construção de uma nova data.
        Então, quando pedimos uma nova data, ela será criada baseada na data da negociação. 
        Trata-se de um novo objeto. Se tentarmos alterar no data do index.html, apenas a cópia 
        será alterada - o novo objeto que retornei date, enquanto o interno seguirá inalterado. 
        Isto é o que chamamos de programação defensiva.
        */

        /*
        Dessa vez não conseguimos alterar as datas no Console. Isto ocorreu porque apesar de 
        termos usado o n1.data.setDate(11), ele não retornará a data original do objeto que 
        ele já tem. Ele criará um novo objeto, uma nova referência baseada naquela data. Se 
        alteramos o objeto, como fizemos no setDate(), não modificaremos a data da 
        negociação. Devemos ter o mesmo cuidado com o construtor.
        */
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}