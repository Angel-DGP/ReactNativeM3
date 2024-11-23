ejecucionSumar =()=>{
    let valor1 = recuperarEntero("i1");
    let valor2 = recuperarEntero("i2");
    console.log("VALOR 1>>>>>> |" + valor1 + "|" + "\nVALOR 2>>>>>> |" + valor2 + "|");
    let total = sumar(valor1,valor2);
    console.log("SUMA>>>>>|" + total + "|");
}
sumar = (v1,v2)=>{
    suma = v1 + v2;
    return suma;
}
restar = (v1,v2) =>{
    return resta = v1 - v2;
}
ejecutarRestar = () =>{
    let valor1 = recuperarFloat("i1");
    let valor2 = recuperarFloat("i2");
    console.log("VALOR 1>>>>>> |" + valor1 + "|" + "\nVALOR 2>>>>>> |" + valor2 + "|")
    let resta = restar(valor1,valor2);
    console.log("RESTA>>>>>>> |" + resta + "|")
}
ejecutar =(fn)=>{
    console.log("como asi que las funciones nunca se ejecutaron? :OOOOO")
    fn();
}
ejecutarOperacion = (operar) =>{
    let valor1 = recuperarFloat("i1");
    let valor2 = recuperarFloat("i2");
    let resultado = operar(valor1,valor2);
    console.log("EL RESULTADO ES>>>>>>> |" + resultado + "|" );
}
imprimir = () =>{
    console.log("Imprimiendo ironias")
}
saludar = ()=>{
    alert("Esta funcionando pana")
}
testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
}
