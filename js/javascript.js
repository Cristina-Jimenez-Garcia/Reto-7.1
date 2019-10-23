
function validar(){
    
    //Validar telefono fijo
    let telefonoFijo = document.forms["formulario"]["Fijo"].value;
    console.log(telefonoFijo);
    var campoIncorrecto = false;
    var errorEmail = false;
    var errorFijo = false;
    var errorMovil = false;
    if( !(telefonoFijo.match(/^\d{9}$/)) ) {
        document.getElementById("errorFijo").style.visibility = "visible";
        campoIncorrecto = true;
        errorFijo = true;
    }else{
        document.getElementById("errorFijo").style.visibility = "hidden";
    }

    //Validar móvil
    let telefonoMovil = document.forms["formulario"]["Movil"].value;
    console.log(telefonoMovil);
    if( !(telefonoMovil.match(/^\d{9}$/)) ) {
        document.getElementById("errorMovil").style.visibility = "visible";
        campoIncorrecto = true;
        errorMovil = true;
    }else{
        document.getElementById("errorMovil").style.visibility = "hidden";
    }
    
    //Validar email
    let email = document.forms["formulario"]["email"].value;
    if(! (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) ) {
        document.getElementById("errorEmail").style.visibility = "visible";
        campoIncorrecto = true;
        errorEmail = true;
    }else{
        document.getElementById("errorEmail").style.visibility = "hidden";
    }

    //Aviso de formulario bien creado o no
    if (!campoIncorrecto){
        alert ("Formulario creado correctamente");
    }else{
        alert ("Formulario no creado");
    }
    
    if(errorEmail || errorMovil || errorFijo){
        campoIncorrecto = false;
    }else{
        document.getElementById("myForm").reset();
    }
    
    return campoIncorrecto;
}
