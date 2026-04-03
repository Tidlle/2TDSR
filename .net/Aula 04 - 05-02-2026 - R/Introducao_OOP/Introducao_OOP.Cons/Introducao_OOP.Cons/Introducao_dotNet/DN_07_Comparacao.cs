using System;
using System.Collections.Generic;
using System.Text;

namespace Introducao_OOP.Cons.Introducao_dotNet
{
    internal class DN_07_Comparacao
    {
        public DN_07_Comparacao()
        {
            // >, <, >=, <=, ==, !=

                int numero1 = 10;
                int numero2 = 5;

                // > Maior que
                bool resultado = numero1 > numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
    
                // < Menor que
                resultado = numero1 < numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
    
                // >= Maior ou igual que
                resultado = numero1 >= numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
    
                // <= Menor ou igual que
                resultado = numero1 <= numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
    
                // == Igual a
                resultado = numero1 == numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
    
                // != Diferente de
                resultado = numero1 != numero2;
                Console.WriteLine("Valor da comparação: {0}", resultado);
        }
    }
}
