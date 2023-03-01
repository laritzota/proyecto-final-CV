function validar(){
    var nom=document.formulario.nombre.value.trim();
    if(nom.length<5){
        alert('Nombre invalido');
        return false;
    }

return true;
}