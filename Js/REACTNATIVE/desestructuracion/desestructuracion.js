recuperar = () =>{
    let frutas = ["pera","manzana"];
    frutas.push("banana");
    return frutas;
}
testRecuperar = ()=>{
    let misFrutas = recuperar(); 
    let firstFruta = misFrutas[0];
    let secondFruta = misFrutas[1];
    console.log("FRUTA PRIMERA>>>>>>" + firstFruta
       + "\nFRUTA SEGUNDA>>>>>>>" + secondFruta 
    )
}
testRecuperarDes = () =>{
    let [fFruta,Sfruta,Tfruta] = recuperar();
    console.log("FRUTA PRIMERA>>>>>>" + fFruta
        + "\nFRUTA SEGUNDA>>>>>>>" + Sfruta 
        + "\nFRUTA TERCERA>>>>>>>" + Tfruta )
}