const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(-33.459999, -70.639999)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${ coordenadas.direccion } es de ${ temperatura }.`;

    } catch (error) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)