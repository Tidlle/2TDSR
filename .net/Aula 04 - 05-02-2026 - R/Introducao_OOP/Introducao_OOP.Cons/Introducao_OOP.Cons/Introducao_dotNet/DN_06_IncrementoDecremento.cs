using System;
using System.Collections.Generic;
using System.Text;

namespace Introducao_OOP.Cons.Introducao_dotNet
{
    internal class DN_06_IncrementoDecremento
    {
        public DN_06_IncrementoDecremento()
        {
            int contador = 1;
            
            //contador = contador + 1;

            //Pos incremento
            //contador++;
            //contador--;

            //Pre incremento
            //++contador;
            //--contador;

            //Pos
            Console.WriteLine("Valor do contador: {0}", contador++);

            //Pre
            Console.WriteLine("Valor do contador: {0}", ++contador);
        }
    }
}
