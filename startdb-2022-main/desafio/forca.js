class Forca {
   chutar(letra) { 
    letra = letra.toString();
    if((letra.length <= 1) && (!letraChutada.includes(letra)))
    {
      const chave = ['a', 'b', 'a', 'c', 'a', 'x', 'i'];
      const abacaxi = "abacaxi";
      var i = 0;
      var h = 0;

      letraChutada += letra;

      if(chave.includes(letra))
      {

        for(i = 0; i < 7; i++)
        {
          if(chave[i] == letra)
          {
            palavraMontada[i] = chave[i];
          }
        }
        
        for(h = 0; h < 7; h++)
        {
          montadaString = palavraMontada.toString();           
        }

        montadaString = montadaString.replace(/,/g, ''); 
        if(abacaxi == montadaString)
        {
          status = "ganhou";
        } 

      }
      else
      {
        vida -= 1;
      }

      
    }
      
  }



  buscarEstado() 
  { 
    if(vida == 0)
    {
      return "perdeu"; 
    }
    else if('abacaxi' == montadaString)
    {
      return status; 
    }
    else
    {
       return 'aguardando chute';
    }
    
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {

      return {
          vidas: vida, // Quantidade de vidas restantes
          palavra: [montadaString], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          letrasChutadas: [letraChutada] // Deve conter todas as letras chutadas

        }
  }
}


var letraChutada = '';
var vida = 6;
var palavraMontada = ['', '', '', '', '', '', ''];
var status = "";
var montadaString = '_______';


module.exports = Forca;
