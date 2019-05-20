class NegociacaoController{

    constructor(){
        /*
        Colocando os inputs no constructor, mesmo que façamos 300 negociações, ele só fará uma 
        busca no DOM pelos elementos. Com isto, conseguimos melhorar a performance.
        */

        let $ = document.querySelector.bind(document);
        /*
            Se você tentar fazer a associação "let $ = document.querySelector;" sem o .bind(document)
            não vai funcionar, pq querySelector é uma função que pertence ao objeto 
            document - chamaremos tal função de método. Internamente, o querySelector tem uma 
            chamada para o this, que é o contexto pelo qual o método é chamado. Logo, o this é o 
            document.  No entanto, quando colocamos o querySelector dentro do $, ele passa a ser 
            executado fora do contexto de document e isto não funciona. Nós queremos que ao 
            colocarmos o querySelector para o $, ele mantenha a associação com o document. 
            Para isto, usamos o bind().
        */
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        
        //this._listaNeg = new ListaNegociacoes(this, function(model){//passando o 'this' como primeiro parâmetro, denota que this é do contexto de NegociacoesController. Com o reflect, informamos que o this de ListaNegociacoes pertence a ListaNegociacoes.
        /*this._listaNeg = new ListaNegociacoes(model => //com a arrowFunction '=>' o contexto de this passa a ser léxico e não dinâmico como a function normal, logo, this agora se refere mesmo a NegociacoesController.
            //console.log("this no construtor de ListaNegociacoes: "+this)//aqui era pra demonstrar em qual contexto 'this' está.
            this._negociacoesView.update(model)
            //Não tem problema passar negociacoesView aqui dentro antes de dar um new em NegociacoesView pq essa parte só vai ser chamada qdo chamarem o método adicionaNegociacao() e esvazia() da Lista de Negociacoes.

        );*/ //Uso do Proxy desabilitou a armadilha do modelo ListaNgociacoes
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

        console.log(this._mensagem);
    }
    
    adiciona(event) {
        event.preventDefault();
        this._listaNeg.adicionaNegociacao(this._criaNegociacao());
        //this._negociacoesView.update(this._listaNeg);//tem q att a lista de novo assim q add uma nova negociacao

        this._mensagem.texto = 'negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        console.log(this._mensagem);

        this._limpaForm();
        //this._listaNeg.negociacoes.length = 0;


        
           //let data = new Date(...this._inputData.value.split("-").map((item, indice) => item - indice % 2));
        //Se vc passar a data no input, ela vai vir no formato yyyy-mm-dd, contudo o Date recebe
        //esse formato de maneira errada, mas ele aceitaria se fosse no formato de array: 
        // ["dd", "mm", "yyyy"], logo, como o this._inputData.value devolve uma string, a gente
        // pode usar o split("-"), que é um método que transforma a string em um array, e o que é
        // passado por parâmetro é o que o array deve ignorar e será tb o ponto de divisão,
        // já que a string devolve um yyyy-mm-dd
        
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        

    }

    apagalista(){
        this._listaNeg.esvazia();

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
      }

    _limpaForm(){
        console.log("aqui");
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
    
        this._inputData.focus();
    
    }
    
}