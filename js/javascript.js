// Jquery + ES6

//Validar telefono
function validarFijo(){
    let telefono = document.forms["formulario"]["Fijo"].value;
    console.log(telefono);
    if( !(telefono.match(/^\d{9}$/)) ) {
        console.log("tele");
        return false;
    }else{
        alert("Hola");
    }
}

/*$(() => {
    //Validar campo obligatorio
    valor = document.getElementById("campo").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        return false;
    }

    //Validar email
    valor = document.getElementById("campo").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
        return false;
    }

    //Validar telefono
    valor = document.getElementById("campo").value;
    if( !(/^\d{9}$/.test(valor)) ) {
        return false;
    }
  });*/