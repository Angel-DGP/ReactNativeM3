recuperarTexto =(idComponente)=>{
    let cmp = document.getElementById(idComponente);
    let valorCmp = cmp.value;
    return valorCmp;
}   
recuperarEntero =(idComponente)=>{
    let String = recuperarTexto(idComponente);
    return parseInt(String);
}
recuperarFloat = (idComponente) =>{
    return parseFloat(string = recuperarTexto(idComponente))
}