class ListaNegociacoes{
    constructor(){//tinha uma variável 'armadilha' dentro do construtor
        this._negociacoes = [];

        //this._armadilha = armadilha; //O modelo é pra ser a parte do código mais reutilizável, pq vc pode usá-lo com outras abordagens diferentes do pardão mvc, por isso não é legal colocar 
                                       //armadilhas que fazem ligação com a parte de estrutura (view). Portanto é melhor criar um proxy para fazer isso.
        //this._contexto = contexto;
    }

    adicionaNegociacao(negociacao){
        //console.log("this do metodo adicionaNegociacao: "+this)
        console.log(`negociação: ${negociacao.volume}`)
        this._negociacoes.push(negociacao);
        //this._armadilha(this); 
         //quando criamos uma instancia de lista de negociacoes, armadilha é o que é recebido, q é a função anônima.
        //dentro dela tem o update da negociacoesView que recebe um model, a função anônima tb recebe o model.
        //Esse model é passado como 'this' através de armadilha, q é a função anônima e que passa o model para 
        //o update de negociacoesView. Esse 'this', que é passado com o nome de model dentro da função anônima,
        //é a própria instância da classe ListaNegociacoes.
        //Agora sempre que chamarem o método adcionaNegociacao() e esvazia(), vai cair nessa armadilha.


        //Reflect.apply(this._armadilha, this._contexto, [this]);//esse this._contexto é a variável que deixa esplícito o contexto atual de ListaNegociacoes, acredito eu.
        //Reflect.apply(função(a função q é representada por this._armadilha), contexto, [array com os parâmetros que a função recebe, no caso, this])
        /*
        O Reflect.apply recebeu o this._armadilha como primeiro parâmetro e o segundo é 
        this._contexto. O terceiro parâmetro é o [this], que será a própria ListaNegociacoes. 
        Aqui é pra deixar claro que o 'this' pertence ao contexto de ListaNegociacoes
        */

        
       
    }

    get negociacoes(){        
        //return this._negociacoes;
        //console.log("dentro do get: "+this._negociacoes);
        return [].concat(this._negociacoes);

        // conseguimos salvar duas negociações. Se preenchermos o formulário uma vez, veremos que temos duas Negociacao. Alguém 
        // conseguiu adicionar fora do método adiciona(). Resolveremos o problema com programação defensiva. Quando alguém 
        // pedir uma lista de negociações, devolveremos uma nova lista - uma cópia da que tenho dentro da ListaNegociacoes. 
        // Mesmo que adicionarmos o length = 0 ou inserir um elemento, como a lista está separada, não será possível 
        // adicionar outra negociação.
        // Em ListaNegociacoes.js, usaremos um truque: daremos um return com array vazio, seguido pelo método concat():
        // get negociacoes() {

        //     return [].concat(this._negociacoes);
        //   }

        // ---------------------------------PARA MUDAR NO CONSOLE
        //chame a variável que foi declarada no próprio script do index chamada negociacaoController e faça o seguinte:
        // negociacaoController._listaNeg.negociacoes.length = 0; ->atribua zero pra Listanegociacoes
        // negociacaoController._listaNeg.negociacoes   ->  depois veja como a lista zerou

        //sempre q vc chama o .negociacoes, mesmo se for negociacaoController._listaNeg.negociacoes.length ele vai passar
        //no método get negociacoes de Listanegociacoes q vai concatenar a cópia do array, logo,
        //não será possível a alteração do tamanho do array
    }

    esvazia(){
        this._negociacoes=[];
        //this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}