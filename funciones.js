function validar(){
    let nombre=document.getElementById("nombres").value;
    if(nombre==""){
        alert("El nombre es obligatorio, ingréselo por favor...");
        return false;
    }
    return true;
}

function mostrargrande(src){
    document.getElementById("grande").src=src;

}