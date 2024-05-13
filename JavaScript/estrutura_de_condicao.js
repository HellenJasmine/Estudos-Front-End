let anoDeNascimento = 1954;
let anoAtual = 2023;
var idadePessoa = anoAtual - anoDeNascimento;
console.log(idadePessoa);

if(idadePessoa >= 18 && idadePessoa < 70){
    console.log("Voto Obrigatório");
}else if(idadePessoa <= 16 || idadePessoa >= 70){
    console.log("Voto opcional!")
}else{
    console.log("Não pode votar");
}