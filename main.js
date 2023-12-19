//LLAMADA DE TODOS LOS CAMPOS Y BOTONES
let $rfc = document.getElementById('rfc');
let $tipoPersona = document.getElementById('tipoPersona');
let $nomb = document.getElementById('nombre');

let $calle = document.getElementById('calle');
let $numExt = document.getElementById('numExt');
let $numInt = document.getElementById('numInt')
let $codigoPostal = document.getElementById('codigoPostal');
let $colonia = document.getElementById('colonia');
let $municipio = document.getElementById('municipio');
let $estado = document.getElementById('estado')

let $emai = document.getElementById('email')
let $confEmail = document.getElementById('confirmarEmail');

let $limparCampos = document.getElementById('limpiar')
let $registrar = document.getElementById('registrar');

let $errorRFC = document.getElementById('errorRFC');
let $errorPersona = document.getElementById('errorPersona');
let $errorNom = document.getElementById('errorNom');
let $errorCalle = document.getElementById('errorCalle');
let $errorNumExt = document.getElementById('errorNumExt');
let $errorNumInt = document.getElementById('errorNumInt');
let $errorCP = document.getElementById('errorCP');
let $errorColonia = document.getElementById('errorColonia');
let $errorMunicipio = document.getElementById('errorMunicipio');
let $errorEstado = document.getElementById('errorEstado');
let $errorCorreo = document.getElementById('errorCorreo');
let $errorConfCorreo = document.getElementById('errorConfCorreo');


// Expresión regular para validar RFC
const rfcRegex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;

const emailRegex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/

//Arreglos de comboBOx
let codigos = [
    "08000", "08010", "08020", "08030", "08040",
    "08100", "08200", "08210", "08220", "08230",
    "08240", "08300", "08310", "08320", "08400",
    "08420", "08500", "08510", "08600", "08610",
    "08620", "08650", "08700", "08710", "08720",
    "08730", "08760", "08760", "08760", "08770",
    "08800", "08810", "08830", "08840", "08900",
    "08910", "08920", "08930"
];

let colonias = [
    "Gabriel Ramos Millán Sección Bramadero", "Ex-Ejido de La Magdalena Mixiuhca", "Ampliación Gabriel Ramos Millán",
    "Gabriel Ramos Millán Sección Cuchilla", "Carlos Zapata Vela", "Agrícola Pantitlán", "Viaducto Piedad",
    "Nueva Santa Anita", "Barrio San Pedro", "Barrio San Francisco Xicaltongo", "Barrio Santiago Norte",
    "Santa Anita", "La Cruz", "Fraccionamiento Coyuya", "Granjas México", "Cuchilla Agrícola Oriental",
    "Agrícola Oriental", "El Rodeo", "Barrio La Asunción", "Barrio Zapotla", "Barrio Los Reyes",
    "Barrio San Miguel", "Juventino Rosas", "Tlazintla", "Gabriel Ramos Millán Sección Tlacotal",
    "Gabriel Ramos Millán", "INPI Picos", "Los Picos de Iztacalco Sección 2A", "Los Picos de Iztacalco Sección 1B",
    "Los Picos de Iztacalco Sección 1A", "Santiago Sur", "Reforma Iztaccíhuatl Norte", "Militar Marte",
    "Reforma Iztaccíhuatl Sur", "INFONAVIT Iztacalco", "Santa Cruz", "Jardines Tecma", "Campamento 2 de Octubre"
];

let municipio = ["Iztacalco"];

let estado = ["CDMX"];

let tipoPersona = ["Fisica", "Moral"];




function mostrarComboBox(arreglo, lugar) {
    let elementos = '<option value="" selected disabled> -- Seleccione -- </option>'

    for (let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
    }
    lugar.innerHTML = elementos
}
mostrarComboBox(tipoPersona, $tipoPersona)
mostrarComboBox(codigos, $codigoPostal);

console.log(codigos.length)
$codigoPostal.addEventListener('change', function () {
    let posicion = codigos.indexOf($codigoPostal.value);
    if (posicion !== -1) {
        let coloniaSelect = colonias[posicion];
        mostrarComboBox([coloniaSelect], $colonia);
        mostrarComboBox([municipio[0]], $municipio)
        mostrarComboBox([estado[0]], $estado);

    } else {
        mostrarComboBox([], $colonia)
        mostrarComboBox([], $municipio)
        mostrarComboBox([], $estado);

    }
})


$limparCampos.addEventListener('click', function () {
    $rfc.value = '';
    $tipoPersona.selectedIndex = 0;
    $nomb.value = '';
    $calle.value = ''
    $codigoPostal.selectedIndex = 0;
    $colonia.value = '';
    $municipio.value = '';
    $estado.value = '';
    $emai.value = '';
    $confEmail.value = '';
    $errorPersona.textContent = '';
    $errorNom.textContent = '';
    $errorRFC.textContent = '';
    $errorCalle.textContent = '';
    $errorNumExt.textContent = '';
    $errorCP.textContent = '';
    $errorCorreo.textContent = '';
    $errorConfCorreo.textContent = '';

})

function validarCombo(elemento, mensajeError, elementoError) {
    if (elemento.value === "") {
        elementoError.textContent = mensajeError;
        console.log(mensajeError);
        return false
    }
    return true
}

function validarRFC() {
    if (rfcRegex.test($rfc.value.toUpperCase())) {
        // El RFC es válido
        $errorRFC.textContent = '';
        return true
    } else {
        // El RFC no es válido
        $errorRFC.textContent = 'RFC inválido.';
        return false
    }
}

function validarEmail(elemento, error) {
    if (emailRegex.test(elemento.value)) {
        return true
    }
    else {
        error.textContent = "Email invalido";
        return false
    }
}

function validarCampo(elemto, mensajeError, elementoError) {
    if (elemto.value.trim() === '') {
        elementoError.textContent = mensajeError;
        return false
    }
    return true
}

function validarCorreos() {
    if ($emai.value === $confEmail.value) {
        return true
    }
    else {
        $errorConfCorreo.textContent = "Los correos no coinciden"
        return false
    }
}

$registrar.addEventListener('click', function () {
    validarRFC();
    validarCampo($nomb, "Ingresa Razon social", $errorNom);
    validarCombo($tipoPersona, "Seleccione tipo persona", $errorPersona);

    validarCampo($calle, "Ingresa una calle", $errorCalle);
    validarCampo($numExt, "Ingresa un numero ", $errorNumExt);
    validarCombo($codigoPostal, "Seleccione CP", $errorCP);



    validarEmail($emai, $errorCorreo);
    validarEmail($confEmail, $errorConfCorreo)
    validarCorreos();

});

