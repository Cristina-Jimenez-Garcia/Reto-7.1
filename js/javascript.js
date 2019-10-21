
function validar(){
    
    //Validar telefono fijo
    let telefonoFijo = document.forms["formulario"]["Fijo"].value;
    console.log(telefonoFijo);
    var campoIncorrecto = false;
    if( !(telefonoFijo.match(/^\d{9}$/)) ) {
        alert("Teléfono fijo incorrecto.");
        campoIncorrecto = true;
        return false;
    }
    //Validar móvil
    let telefonoMovil = document.forms["formulario"]["Movil"].value;
    console.log(telefonoMovil);
    if( !(telefonoMovil.match(/^\d{9}$/)) ) {
        alert("Móvil incorrecto.");
        campoIncorrecto = true;
        return false;
    }
    /*
    //Validar email
    let email = document.forms("email").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
        alert("Email incorrecto.");
        campoIncorrecto = true;
        return false;
    }*/
    if (!campoIncorrecto){
        alert ("Formulario creado correctamente");
    }else{
        alert ("Formulario no creado");
    }
    
}