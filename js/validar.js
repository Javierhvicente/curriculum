function validarString(cadena, min, max) {
    var res = false;

    if (min == 0 && max != null) {
        if ((isNaN(cadena) && cadena.length <= max) || cadena == "")
            res = true;
    }

    if (min > 0 && max == null) {
        if (isNaN(cadena) && cadena.length >= min)
            res = true;
    }

    if (min > 0 && max != null) {
        if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
            res = true;
    }

    return res;
}


function mostrar(elemento){
    elemento.classList.remove('is-valid');
    elemento.classList.add('is-invalid');
}

function noMostrar(elemento){
    elemento.classList.remove('is-invalid');
    elemento.classList.add('is-valid');
    
}

function entraFoco(elemento){
    elemento.style.backgroundColor = "lightblue";
}

function saleFoco(elemento){
    elemento.style.backgroundColor = "";
}

function validarStringInside(elemento, min, max) {
    if (!validarString(elemento.value, min, max)) {
        elemento.style.backgroundColor = "lightyellow";
        elemento.style.borderColor = "red";
        mostrar(elemento);
        
    } else {
        elemento.style.backgroundColor = "";
        elemento.style.borderColor = "";
        noMostrar(elemento);
    }
}

function validarDni(dni) {
    var res = false;
    const valor = dni.toUpperCase();
    const num = valor.substring(0, 8);
    const letra = valor.charAt(8);
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^[0-9]{8}[A-Z]$/;

    if (!dniRegex.test(valor)) {
        return res;
    }

    const letraCalculada = letras[num % 23];
    if (letra === letraCalculada) {
        res = true;
    }
    return res;
}


function validarFechaMayorActual(inputFecha) {
    // Obtener la fecha seleccionada por el usuario
    let fechaIngresada = new Date(inputFecha.value);
    // Obtener la fecha actual
    let fechaActual = new Date();

    // Comparar ambas fechas (solo comparar hasta el día, sin horas)
    if (fechaIngresada < fechaActual) {
        // Si la fecha ingresada es mayor a la fecha actual
        inputFecha.style.backgroundColor = "lightyellow";  // Cambiar el estilo para destacar el error
        inputFecha.style.borderColor = "red";
        return false; // Devolver false si no es válida
    } else {
        // Si la fecha es válida
        inputFecha.style.backgroundColor = "";  // Restablecer el estilo
        inputFecha.style.borderColor = "";
        return true; // Devolver true si es válida
    }
}


function validarRadioBoton(opc1, opc2) {
    if (!opc1.checked && !opc2.checked) {
        opc1.style.backgroundColor = "lightyellow";
        opc1.style.borderColor = "red";
        opc2.style.backgroundColor = "lightyellow";
        opc2.style.borderColor = "red";
        return false;
    } else {
        return true;
    }
}

function validarNumeroRango(numero, capaerror) {
    const min = 1000;
    const max = 52999;
    if (numero >= min && numero <= max) {
        noMostrar(capaerror);
        return true;
    } else {
        elemento.style.backgroundColor = "lightyellow";
        elemento.style.borderColor = "red";
        mostrar(capaerror);
        return false;
    }
}


function validarCheckbox(box) {
    if (!box.checked) {
        box.style.backgroundColor = "lightyellow";
        box.style.borderColor = "red";
        return false;
    } else {
        return true;
    }
}


function validarInt(elemento, length) {
    var res = true;
    if (isNaN(elemento) || elemento.length < length) {
        res = false;
    }
    return res;
}

function validarRadio(campo) {
    // Obtener todos los radio buttons con el mismo name
    let radios = document.getElementsByName(campo.name);
    let seleccionado = false;
    
    // Verificar si alguno está seleccionado
    for (let radio of radios) {
        if (radio.checked) {
            seleccionado = true;
            break;
        }
    }
    
    // Si está seleccionado, quitar 'is-invalid' y agregar 'is-valid'
    if (seleccionado) {
        for (let radio of radios) {
            radio.classList.remove('is-invalid');
            radio.classList.add('is-valid');
        }
        document.getElementById('errorGenero').style.display = 'none';
    } else {
        // Si no está seleccionado, marcar todos como inválidos
        for (let radio of radios) {
            radio.classList.remove('is-valid');
            radio.classList.add('is-invalid');
        }
        document.getElementById('errorGenero').style.display = 'block';
    }
}


function validarCodigoPostal(numero) {
    const numeroStr = numero.toString();
    if (numeroStr.length < 5) {
        return false;
    }
    const codigoPostal = parseInt(numeroStr.substring(0, 5), 10);
    
    return codigoPostal >= 1000 && codigoPostal <= 52999;
}


function ConseguirProvincia(cp){
    const provincias = {
        "01": "Álava",
        "02": "Albacete",
        "03": "Alicante",
        "04": "Almería",
        "05": "Ávila",
        "06": "Badajoz",
        "07": "Islas Baleares",
        "08": "Barcelona",
        "09": "Burgos",
        "10": "Cáceres",
        "11": "Cádiz",
        "12": "Castellón",
        "13": "Ciudad Real",
        "14": "Córdoba",
        "15": "La Coruña",
        "16": "Cuenca",
        "17": "Gerona",
        "18": "Granada",
        "19": "Guadalajara",
        "20": "Guipúzcoa",
        "21": "Huelva",
        "22": "Huesca",
        "23": "Jaén",
        "24": "León",
        "25": "Lérida",
        "26": "La Rioja",
        "27": "Lugo",
        "28": "Madrid",
        "29": "Málaga",
        "30": "Murcia",
        "31": "Navarra",
        "32": "Orense",
        "33": "Asturias",
        "34": "Palencia",
        "35": "Las Palmas",
        "36": "Pontevedra",
        "37": "Salamanca",
        "38": "Santa Cruz de Tenerife",
        "39": "Cantabria",
        "40": "Segovia",
        "41": "Sevilla",
        "42": "Soria",
        "43": "Tarragona",
        "44": "Teruel",
        "45": "Toledo",
        "46": "Valencia",
        "47": "Valladolid",
        "48": "Vizcaya",
        "49": "Zamora",
        "50": "Zaragoza",
        "51": "Ceuta",
        "52": "Melilla"
    };

    const referencia = cp.value.substring(0,2);
    const provinciaValue = provincias[referencia];
    document.getElementById("Provincia").value = provinciaValue;
          
}

function validarSelect(elemento) {
    var res  = false;

    if(elemento.value != ""){
        res = true;
    }
    return res;
}

function validateNumTelefono(elemento,) {
    var expresion = /^(?:\+34|0034|34)?[6-9]\d{8}$/
    ;
    if (elemento.value != "") {
        if (!expresion.test(elemento.value)) {
            elemento.style.backgroundColor = "lightyellow";
            elemento.style.borderColor = "red";
            mostrar(elemento);
            return false;
        } else {
            noMostrar(elemento);
            return true;
        }
    } else {
        elemento.style.backgroundColor = "lightyellow";
        elemento.style.borderColor = "red";
        mostrar(elemento);
        return false;
    }
}

function revisarEmail(elemento) {
    if (elemento.value != "") {
        var dato = elemento.value;
        var expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!expresion.test(dato)) {
            mostrar(elemento)
            elemento.style.backgroundColor = "lightyellow";
            elemento.style.borderColor = "red";
            return false;
        } else {
            noMostrar(elemento)
            return true;
        }
    } else {
        elemento.style.backgroundColor = "lightyellow";
        elemento.style.borderColor = "red";
        mostrar(elemento)
        return false;
    }
}
