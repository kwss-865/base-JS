// Alguns erros comuns 

// const numero; 1º Erro: não declarar uma constante 

const minhaVar = "oi" // 2º Erro: Não declarar uma varável e chmar no código;
console.log(minhaVar); // exemplo, chamar minhavar com V minúsculo;

console.error("Isso está errado") // 3º "Erro": Você pode declarar um erro com  console,error

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
}
else{
    console.log("Suco de maça")
}

// Valor terário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "todinho")
// modo ternário, utilizando a estrutura______>=____?____:____
// modo ternário, utilizando a estrutura______<=____?____:____
// modo ternário, utilizando a estrutura______==____?____:____

//Template string

const nome = "Estefan";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentacao);

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`

console.log(apresentacao2);