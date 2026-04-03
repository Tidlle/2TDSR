using System;
using System.Collections.Generic;
using System.Text;

namespace Introducao_OOP.Cons.Introducao_dotNet
{
    internal class DN_08_Strings
    {
        public DN_08_Strings()
        {
            char valor = 'a';

            string nome = "Eduardo";
            string sobrenome = "Martins";

            Console.WriteLine(nome + sobrenome);
            Console.WriteLine(nome + " " + sobrenome);

            //Interpolação
            Console.WriteLine($"Nome: {nome} {sobrenome}");

            //verbatin
            Console.WriteLine($@"O texto é grande 
                                com quebra de linha

                                nome: {nome}
            ");

            Console.WriteLine($"Número de caracteres: {sobrenome.Length}");
            Console.WriteLine($"Nome em Maiúscula: {sobrenome.ToUpper()}");
            Console.WriteLine($"Nome em Minúscula: {sobrenome.ToLower()}");
            Console.WriteLine($"Alterar sobrenome para Carmo: {sobrenome.Replace("Martins", "Carmo")}");

            //coalecencia 

            nome = null;

            Console.WriteLine($"Nome: {nome ?? "<Vazio>"}");
        }
    }
}
