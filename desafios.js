//Ordena numeros
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(3, 1, 5); //1, 3, 5


//Função que valida se uma palavra é palíndromo
/*Palíndromo é uma palavra, frase ou número que permanece igual quando lida de 
trás para diante. Por extensão, palíndromo é qualquer série de elementos com 
simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois 
sentidos.
*/
const essaPalavraEUmPalindromo = function (palavra){
    var separandoAsLetrasDaPalavra = palavra.split("");
  
    function invertendoPalavra(palavra) {
      var palavraInvertida = separandoAsLetrasDaPalavra.reverse("");
      palavraInvertida = palavraInvertida.join("");
      return palavraInvertida;
    }
  
    if (palavra === invertendoPalavra(palavra)) {
      console.log("A palavra " + palavra + " é um palindromo!");
    } else {
      console.log("A palavra " + palavra + " não é um palindromo!");
    }
  };
  
  essaPalavraEUmPalindromo("radar");