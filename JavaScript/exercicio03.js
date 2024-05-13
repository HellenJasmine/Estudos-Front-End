let moedasColetas = 100;
let tempoDeConclusao = 1;
let estrelas = 0;

if (moedasColetas < 100 && tempoDeConclusao > 5) {
    estrelas += 1;
    console.log("Estrelas:" + estrelas);
}else if(moedasColetas < 100 || tempoDeConclusao > 5){
    estrelas += 2;
    console.log("Estrelas:" + estrelas);
}else{
    estrelas += 3;
    console.log("Estrelas:" + estrelas);
}