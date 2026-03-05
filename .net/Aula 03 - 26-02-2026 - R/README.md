### Tópicos Abordados

- Templates de projeto no .NET
- O que é Solution
- Gerenciamentos de pacotes
	- Entendendo .Nuget
	- Dependências internas
- Imprimindo valores
- Variáveis
- Lendo valores da tela
- Constantes
- Operadores Aritméticos
- Incremento e Decremento
- Operadores de Comparação
- Strings (Textos)
- Operadores de Decisão

## Templates de Projeto no .NET

Quando adicionamos um novo projeto em uma **Solution .NET**, podemos escolher **templates prontos**, que já vêm com estrutura básica e configurações iniciais.

Eles aceleram o desenvolvimento porque já trazem arquivos, dependências e padrões comuns configurados.

Os mais comuns são:

- **Web API**
- **Console Application**
- **Class Library**
- **xUnit Test Project**

### Exemplos e templates

#### **Web API**

Cria uma API REST pronta com controllers e Swagger.

```bash
dotnet new webapi -n MinhaApi
```

Uso comum:

- Criar APIs para sistemas web ou mobile
- Microserviços


#### **Console Application**

Aplicação simples que roda no terminal.

```bash
dotnet new console -n MeuAppConsole
```

Uso comum:

- Workers    
- Jobs
- Processamentos batch
- Testes rápidos

#### **Class Library**

Projeto que gera uma DLL (biblioteca reutilizável).

```bash
dotnet new classlib -n MinhaBiblioteca
```

Uso comum:

- Camada Domain    
- Camada Application
- Regras de negócio compartilhadas

#### **xUnit Test Project**

Projeto de testes automatizados.

```bash
dotnet new xunit -n MinhaApp.Tests
```

Uso comum:

- Testes unitários
- Testes de integração


## O que é uma _Solution_ no .NET?

No ecossistema .NET, uma **Solution** é um contêiner lógico que organiza e agrupa um ou mais **projetos** relacionados dentro de uma aplicação.

Ela funciona como a “pasta principal” da sua aplicação, permitindo que você trabalhe com múltiplos projetos ao mesmo tempo (API, domínio, testes, infraestrutura, etc.), mantendo tudo estruturado e organizado.

### Estrutura básica

Quando você cria uma solution, é gerado um arquivo com extensão:

```bash
MinhaAplicacao.sln
```

Esse arquivo `.sln`:

- Armazena a lista de projetos que pertencem à solution
- Define configurações de build (Debug/Release)
- Organiza dependências entre projetos
- Permite abrir tudo junto no Visual Studio, Rider ou VS Code


## Gerenciamentos de pacotes

Quando desenvolvemos uma aplicação em .NET, quase sempre precisamos reutilizar código. Isso pode acontecer de duas formas principais:

1. **Usando pacotes NuGet** (bibliotecas externas)
2. **Criando dependência entre projetos da mesma solution**

### Pacotes NuGet

O **NuGet** é o gerenciador oficial de pacotes do .NET.  
Ele funciona como uma “loja de bibliotecas prontas”.

Você instala um pacote e pode usar funcionalidades prontas sem precisar criar tudo do zero.

#### Exemplo prático

Imagine que você quer acessar banco de dados PostgreSQL.
Em vez de criar toda a comunicação manualmente, você instala o pacote:

```bash
dotnet add package Npgsql
```

Ou via `.csproj`:

```xml
<ItemGroup>  
  <PackageReference Include="Npgsql" Version="8.0.0" />  
</ItemGroup>
```

Agora pode ser usado:

```c#
using Npgsql;  
  
var connection = new NpgsqlConnection("connection string");  
await connection.OpenAsync();
```

#### Exemplos comuns de pacotes NuGet

- `Microsoft.EntityFrameworkCore`
- `Npgsql`
- `Restsharp`
- `Serilog`
- `AutoMapper`

Todos pacotes externos que podem ser baixado, estão no repositório oficial:

👉 [https://www.nuget.org](https://www.nuget.org)

#### Características do NuGet

- São bibliotecas externas
- Possuem versão (controle de compatibilidade)
- Ficam registradas no `.csproj`
- São restauradas automaticamente com `dotnet restore`

### Dependência entre Projetos

Quando você tem vários projetos dentro da mesma solution, um projeto pode depender do outro.

Exemplo:

- `MinhaApp.Api`
- `MinhaApp.Application`
- `MinhaApp.Domain`
- `MinhaApp.Infrastructure`

A API precisa usar o projeto Application.  
O Application usa o Domain.  
O Infrastructure implementa interfaces do Domain.

#### Exemplo prático

Adicionar referência entre projetos:

```bash
dotnet add MinhaApp.Api reference MinhaApp.Application
```

No `.csproj` ficará assim:

```xml
<ItemGroup>
  <ProjectReference Include="..\MinhaApp.Application\MinhaApp.Application.csproj" />
</ItemGroup>
```

Agora o projeto  pode usar classes do `Application`.

```c#
using MinhaApp.Application.Services;

var service = new ProdutoService();
```

#### Diferença Principal

| NuGet                          | Referência entre Projetos      |
| ------------------------------ | ------------------------------ |
| Biblioteca externa             | Código da própria solução      |
| Instalado via PackageReference | Instalado via ProjectReference |
| Baixado do nuget.org           | Arquivo local (.csproj)        |
| Versionado                     | Atualizado junto com o código  |

## Imprimindo valores

### Comentários

Para fazer comentários utilizamos o `//` para a linha ou `/* */` para muitas linhas.

```c#
// Unica linha de comentario

/*
 * Bloco de linhas comentadas
 * Linha 1
 * Linha 2
 * Etc..
 */
```

**Comentário do tipo Tarefa**

Comentários que são uteis para registar tarefas e visualizar no Tas List

```c#
//TODO: <Descriçao da sua tarefa>" para criar uma tarefa que deseje lembrar
```

Para habilitar o Task List vá no menu superior `View>Task List`

### Imprimindo valores

Para imprimir valores podemos utilizar a classe `Console` e o método `WriteLine`

```c#
Console.WriteLine(new string('#', 50));
Console.WriteLine("Ola Turma!!!");
Console.WriteLine(new string('#', 50));

//Aguardando uma interação do usuário
Console.ReadKey();
```

## Variáveis

Uma **variável** é um espaço na memória usado para armazenar um valor durante a execução do programa.

**Exemplo:**

```c#
int idade = 30;
string nome = "Nome da pessoa";
```

Aqui:
- `idade` armazena um número inteiro.    
- `nome` armazena um texto.

### Tipos de Variáveis no .NET

No .NET temos dois grandes grupos:

- Valor
- Referência

#### Tipos por Valor (Value Types)

- `int`
- `double`
- `bool`
- `float`

Eles armazenam **o valor diretamente na memória**.

```c#
// byte → 1 byte (8 bits)
// Intervalo: 0 até 255
byte idade = 25;
Console.WriteLine("Idade: " + idade);


// sbyte → 1 byte (8 bits)
// Intervalo: -128 até 127
sbyte temperatura = -10;
Console.WriteLine("Temperatura: " + temperatura);


// short → 2 bytes (16 bits)
// Intervalo: -32.768 até 32.767
short populacao = 30000;
Console.WriteLine("População: " + populacao);


// ushort → 2 bytes (16 bits)
// Intervalo: 0 até 65.535
ushort numeroDeAlunos = 500;
Console.WriteLine("Número de alunos: " + numeroDeAlunos);


// int → 4 bytes (32 bits)
// Intervalo: -2.147.483.648 até 2.147.483.647
int quantidadeDeProdutos = 1000;
Console.WriteLine("Quantidade de produtos: " + quantidadeDeProdutos);


// uint → 4 bytes (32 bits)
// Intervalo: 0 até 4.294.967.295
uint numeroDeItens = 5000;
Console.WriteLine("Número de itens: " + numeroDeItens);


// long → 8 bytes (64 bits)
// Intervalo: -9.223.372.036.854.775.808 até 9.223.372.036.854.775.807
long distanciaTotal = 10000000000;
Console.WriteLine("Distância total: " + distanciaTotal);


// ulong → 8 bytes (64 bits)
// Intervalo: 0 até 18.446.744.073.709.551.615
ulong numeroDeEstrelas = 100000000000;
Console.WriteLine("Número de estrelas: " + numeroDeEstrelas);


// float → 4 bytes (32 bits)
// Precisão aproximada: 6–9 dígitos
// Tipo ponto flutuante (menos preciso que double)
float altura = 1.75f;
Console.WriteLine("Altura: " + altura);


// double → 8 bytes (64 bits)
// Precisão aproximada: 15–17 dígitos
// Tipo ponto flutuante padrão no .NET
double peso = 68.5;
Console.WriteLine("Peso: " + peso);


// decimal → 16 bytes (128 bits)
// Alta precisão (28–29 dígitos)
// Ideal para valores financeiros
decimal preco = 99.99m;
Console.WriteLine("Preço: " + preco);


// char → 2 bytes (16 bits)
// Representa um caractere Unicode (UTF-16)
char genero = 'M';
Console.WriteLine("Gênero: " + genero);


// bool → 1 byte
// true ou false
bool estaChovendo = false;
Console.WriteLine("Está chovendo? " + estaChovendo);

Console.ReadKey();
```

##### Tamanho em Memória

| Tipo    | Bytes | Bits |
| ------- | ----- | ---- |
| byte    | 1     | 8    |
| sbyte   | 1     | 8    |
| short   | 2     | 16   |
| ushort  | 2     | 16   |
| int     | 4     | 32   |
| uint    | 4     | 32   |
| long    | 8     | 64   |
| ulong   | 8     | 64   |
| float   | 4     | 32   |
| double  | 8     | 64   |
| decimal | 16    | 128  |
| char    | 2     | 16   |
| bool    | 1     | 8    |

#### Tipos por Referência (Reference Types)

- `string`
- `class`
- `object`
- `array`

Eles armazenam **uma referência (endereço)** para um objeto que está em outra área da memória.

```c#
string nome = "Nome da pessoa";

//Object
Object a = 10;

//Classe
Object b = new object();
StringBuilder classe = new StringBuilder();


```

### Memória no .NET: Stack e Heap

Quando o programa executa, a memória é organizada principalmente em:

- **Stack (Pilha)**
- **Heap**

#### Stack (Pilha)

A **Stack** é usada para:
- Variáveis locais
- Parâmetros de métodos
- Tipos por valor

```c#
void Metodo()
{
    int x = 10;
}
```

Quando o método termina, a variável `x` é removida automaticamente da stack.

Sendo assim a Stack é:

- Muito rápida
- Organizada automaticamente
- Limpa ao final do escopo

#### Heap

A **Heap** é usada para:

- Objetos (classes)    
- Arrays
- Dados maiores

```c#
Pessoa p = new Pessoa();
```

O que acontece:

- A variável `p` (referência) fica na **Stack**
- O objeto `Pessoa` fica na **Heap**

``` Código
STACK              HEAP
-----              -----
p  ----------->    Pessoa { ... }
```

A Heap é gerenciada pelo **Garbage Collector (GC)**, que remove objetos que não estão mais sendo usados.

## Lendo valores da tela

`Console.ReadLine()` é um método utilizado para capturar dados digitados pelo usuário no console.  
Ele pausa a execução do programa até que o usuário pressione **Enter**.  
O valor informado é retornado como uma `string`, podendo ser armazenado em uma variável para uso posterior.

```c#
Console.WriteLine("Digite seu nome");
string? nome = Console.ReadLine();

Console.WriteLine();

Console.WriteLine("Digite seu sobrenome");
string? sobrenome = Console.ReadLine();

Console.WriteLine($"Nome completo é: {0} {1}", nome, sobrenome);

Console.WriteLine();
```
## Constantes

Uma **constante** é uma variável cujo valor **não pode ser alterado** após ser definido.  
No C#, usamos a palavra-chave `const`, e o valor deve ser atribuído no momento da declaração.

```c#
const double PI = 3.14159;

Console.WriteLine(PI);
```
## Operadores Aritméticos

Operadores aritméticos são símbolos usados para realizar cálculos matemáticos em variáveis e valores numéricos.

```C#
int numero1 = 10;
int numero2 = 5;

  
//Operadores  Soma +, Subtração -, Multiplicação *, Divisão /

int soma = numero1 + numero2;
Console.WriteLine("Valor da operação " + soma);

int subtracao = numero1 - numero2;
Console.WriteLine("Valor da operação " + subtracao);

int multiplicacao = numero1 * numero2;
Console.WriteLine("Valor da operação " + multiplicacao);

int divisao = numero1 / numero2;
Console.WriteLine("Valor da operação " + divisao);

float conta = numero1 / 5.2f;
//var resposta = numero1 * 5.5m; //Recebe o tipo do objeto depois do igual 

decimal resposta = numero1 * 5.5m;
```


## Incremento e Decremento

Incremento (`++`) aumenta o valor da variável em **1**.  
Decremento (`--`) diminui o valor da variável em **1**.

Eles podem ser usados de duas formas:

- **Pós-incremento** → usa o valor atual e depois incrementa (`variavel++`)
- **Pré-incremento** → incrementa primeiro e depois usa o valor (`++variavel`)


```c#
int contador = 5;

// Pós-Incremento (usa o valor atual e depois soma 1)
Console.WriteLine($"Valor do Contador: {contador++}");
Console.WriteLine($"Valor do Contador após incremento: {contador}");

Console.WriteLine("---------------------------");

int contadorPre = 5;

// Pré-Incremento (soma 1 primeiro e depois usa o valor)
Console.WriteLine($"Valor do Contador: {++contadorPre}");
Console.WriteLine($"Valor do Contador após incremento: {contadorPre}");

Console.WriteLine("---------------------------");

// Decremento
contador--;
Console.WriteLine($"Valor do Contador após decremento: {contador}");
```

#### Resultado

Se `contador = 5`:
- `contador++` → imprime **5**, depois vira **6**
- `++contadorPre` → primeiro vira **6**, depois imprime **6**
- `contador--` → reduz 1 unidade
- 
## Operadores de Comparação

Operadores de comparação são usados para **comparar valores**.  
O resultado da comparação sempre será um **bool** (`true` ou `false`).

Principais operadores:

- `>` → maior que
- `<` → menor que
- `>=` → maior ou igual
- `<=` → menor ou igual
- `==` → igual
- `!=` → diferente

```c#
// Operadores de condição
int numero1 = 10;
int numero2 = 5;

// > Maior que
bool resultado1 = numero1 > numero2;
Console.WriteLine($"numero1 > numero2: {resultado1}");

// < Menor que
bool resultado2 = numero1 < numero2;
Console.WriteLine($"numero1 < numero2: {resultado2}");

// >= Maior ou igual
bool resultado3 = numero1 >= numero2;
Console.WriteLine($"numero1 >= numero2: {resultado3}");

// <= Menor ou igual
bool resultado4 = numero1 <= numero2;
Console.WriteLine($"numero1 <= numero2: {resultado4}");

// == Igual
bool resultado5 = numero1 == numero2;
Console.WriteLine($"numero1 == numero2: {resultado5}");

// != Diferente
bool resultado6 = numero1 != numero2;
Console.WriteLine($"numero1 != numero2: {resultado6}");
```

## Strings (Textos)

Uma **string** é um tipo usado para armazenar textos no C#.  
Ela é um **tipo por referência** e representa uma sequência de caracteres (`char`).

Exemplo de caractere único:

```c#
char valor = 'a'; // Apenas um caractere
```

### Concatenação
Une textos usando `+`.

```c#
string nome = "Humberto";
string sobrenome = "Oliveira";

Console.WriteLine(nome + sobrenome);
Console.WriteLine(nome + " " + sobrenome);
```
### Interpolação (`$`)
Permite inserir variáveis dentro da string de forma mais legível.

```c#
string nome = "Humberto";
string sobrenome = "Oliveira";

Console.WriteLine($"Nome é: {nome} {sobrenome}");
```

### Verbatim (`@`)
Permite escrever texto com múltiplas linhas e manter formatação.

```c#
Console.WriteLine($@"
O texto é longo

com quebra de linha

");
```
### Métodos úteis

- `.Length` → quantidade de caracteres
- `.ToUpper()` → converte para maiúsculo
- `.ToLower()` → converte para minúsculo
- `.Replace()` → substitui parte do texto

```c#
string sobrenome = "Oliveira";

Console.WriteLine($"Número de caracteres: {sobrenome.Length}");
Console.WriteLine($"Nome em Maiúsculo: {sobrenome.ToUpper()}");
Console.WriteLine($"Nome em Minúsculo: {sobrenome.ToLower()}");
Console.WriteLine($"Alterar sobrenome para Melo: {sobrenome.Replace("Oliveira", "Melo")}");
```
### Coalescência Nula (`??`)

Define um valor padrão caso a variável seja `null`.

```c#
nome = null;
Console.WriteLine($"O Nome é: {nome ?? "<Vazio>"}");
```

**Exemplo completo:** 

```c#
char valor = 'a';

string nome = "Humberto";
string sobrenome = "Oliveira";


// Concatenação
Console.WriteLine(nome + sobrenome);
Console.WriteLine(nome + " " + sobrenome);


// Interpolação (forma mais moderna e recomendada)
Console.WriteLine($"Nome é: {nome} {sobrenome}");


// String multilinha (verbatim + interpolação)
Console.WriteLine($@"
O texto é longo

com quebra de linha

Nome é: {nome} {sobrenome}
");


// Manipulações comuns
Console.WriteLine($"Número de caracteres: {sobrenome.Length}");
Console.WriteLine($"Nome em Maiúsculo: {sobrenome.ToUpper()}");
Console.WriteLine($"Nome em Minúsculo: {sobrenome.ToLower()}");
Console.WriteLine($"Alterar sobrenome para Melo: {sobrenome.Replace("Oliveira", "Melo")}");


// Operador de Coalescência Nula (??)
nome = null;
Console.WriteLine($"O Nome é: {nome ?? "<Vazio>"}");
```


## Operadores de Decisão

Operadores de decisão são usados para **controlar o fluxo do programa**, permitindo executar diferentes blocos de código conforme uma condição seja verdadeira ou falsa.

Os principais são:

- `if / else`
- `switch`
- Operador **ternário** (`? :`)

### `if / else`
Usado quando há múltiplas condições ou validações mais complexas.

```c#
if (valorCodigo == 2)
{
    Console.WriteLine("Condição verdadeira = 2");
}
else if (valorCodigo == 4)
{
    Console.WriteLine("Condição verdadeira = 4");
}
else
{
    Console.WriteLine("Condição negação");
}
```

### Operador Ternário
Forma reduzida do `if/else`, ideal para decisões simples.

```c#
var suaIdade = 18;

Console.WriteLine(suaIdade >= 18 
    ? "Maior de idade" 
    : "Menor de idade");
```

###  `switch`
Indicado quando se compara a mesma variável com vários valores possíveis.

```c#
switch (valorCodigo)
{
    case 2:
    case 4:
        Console.WriteLine($"Condição = {valorCodigo}");
        break;

    default:
        Console.WriteLine($"Condição = {valorCodigo} - default");
        break;
}
```


**Exemplos completo:**

```c#
int valorCodigo = 2;


// IF / ELSE
if (valorCodigo == 2)
{
    Console.WriteLine("Condição verdadeira = 2");
}
else if (valorCodigo == 4)
{
    Console.WriteLine("Condição verdadeira = 4");
}
else
{
    Console.WriteLine("Condição negação");
}


Console.WriteLine("-----------------------");


// Operador Ternário
var suaIdade = 18;

// Condição ? Valor se verdadeiro : Valor se falso
Console.WriteLine(suaIdade >= 18 
    ? "Maior de idade" 
    : "Menor de idade");

Console.WriteLine("-----------------------");


// SWITCH
switch (valorCodigo)
{
    case 2:
    case 4:
        Console.WriteLine($"Condição = {valorCodigo}");
        break;

    default:
        Console.WriteLine($"Condição = {valorCodigo} - default");
        break;
}
``` 