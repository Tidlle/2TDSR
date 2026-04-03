using System;
using System.Collections.Generic;
using System.Text;

namespace Introducao_OOP.Cons.Introducao_dotNet
{
    internal class DN_05_OperadoresAritimeticos
    {
        public DN_05_OperadoresAritimeticos()
        {
            //Operadores = + , - , *, /

            int numero1 = 10;
            int numero2 = 5;

            int soma = numero1 + numero2;
            Console.WriteLine("Valor da operação Soma " + soma);

            int subtracao = numero1 - numero2;
            Console.WriteLine("Valor da operação Subtraçao " + subtracao);

            int multiplicacao = numero1 * numero2;
            Console.WriteLine("Valor da operação multiplicacao " + multiplicacao);

            int divisao = numero1 / numero2;
            Console.WriteLine("Valor da operação divisao " + divisao);

            float conta = numero1 / 5.2f;
            //var resposta = numero1 * 5.5m; //Recebe o tipo do objeto depois do igual 

            decimal resposta = numero1 * 5.5m;
        }
    }
}
