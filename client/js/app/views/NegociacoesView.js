class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => 
                //     console.log(typeof `
                //     <tr>
                //         <td>${DateHelper.dataParaTexto(n.data)}</td>
                //         <td>${n.quantidade}</td>
                //         <td>${n.valor}</td>
                //         <td>${n.volume}</td>
                //     </tr>
                // ` );//esse console.log retorna uma String.
                     `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    ` 
                    
                ).join('') //não precisa desse '' dentro de join, não sei pq o cara colocou. Só faria diferença se o returno fosse um array, não uma string. Na verdade não precisa nem do join().
                // -----------------------por que usar o join('')?------------------------------------
                // Oi, o join em questão é pra juntar todos os itens da array pelo separador definido (no caso, nada ''). Como tu tás usando um .map(), o retorno é uma array que, concatenada te trará uma lista, por exemplo:

                // var lista = [1,2,3];
                // `teste ${lista.map(numero => numero)}`
                // retornará teste 1,2,3.

                // Agora, com o join:

                // var lista = [1,2,3];
                // `teste ${lista.map(numero => numero).join('')}`
                // temos os itens juntos, sem separador: teste 123.
                //-------------------------------------------------------------------------
            }
                
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${
                    (function() {
            
                        let total = 0;
                        model.negociacoes.map(n => total+= n.volume);
                        return total;
                   })()  //Immediately-invoked function expression (IIFE) - dentro da Expression language ${}
                         //não podemos passar muitas informações, como declarar uma variável, em seguida percorrer
                         //uma lista e retornar um total, mas vc pode colocar tudo isso dentro de uma função e invocá-la
                         //imediatamente colocando um "()" no final dela e tudo vai funcionar. Mas você pode deixar sua expressão assim:
                        //  ${model.negociacoes.reduce(function(total, n) { //reduce() reduz o array a um único resultado, não precisando fazer um foreach
                        //     return total + n.volume;
                        //     }, 0.0) //esse 0.0 é o valor inicial q total (q pode ser qualquer nome) recebe
                        // }
                        //Deixando ainda mais reduzido:
                        //${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                        //como já vimos, depois da seta => não precisamos colocar as chaves {} qdo é uma linha só
                  }</td>
            </tfoot>
        </table>
        `;
    }

}