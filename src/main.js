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





let $codigoPostal = document.getElementById('codigoPostal');
let $colonia = document.getElementById('colonia');
let $municipio = document.getElementById('municipio');
let $estado = document.getElementById('estado')
let $tipoPersona = document.getElementById('tipoPersona')
let $limparCampos = document.getElementById('limpiar')

function mostrarCodigos(arreglo, lugar) {
    let elementos = '<option selected disabled> -- Seleccione -- </option>'

    for (let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>'
    }
    lugar.innerHTML = elementos
}
mostrarCodigos(tipoPersona, $tipoPersona)
mostrarCodigos(codigos, $codigoPostal);

console.log(codigos.length)
$codigoPostal.addEventListener('change', function () {
    let posicion = codigos.indexOf($codigoPostal.value);
    if (posicion !== -1) {
        let coloniaSelect = colonias[posicion];
        mostrarCodigos([coloniaSelect], $colonia);
        mostrarCodigos([municipio[0]], $municipio)
        mostrarCodigos([estado[0]], $estado);

    } else {
        mostrarCodigos([], $colonia)
        mostrarCodigos([], $municipio)
        mostrarCodigos([], $estado);

    }
})


$limparCampos.addEventListener('click', function () {
    $codigoPostal.value = '';
    $colonia.value = '';
    $municipio.value = '';
    $estado.value = '';

})

