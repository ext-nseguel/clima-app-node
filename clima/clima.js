const axios = require('axios');


const getClima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=44a29bb0c69a5d9a0fdfce4724c4b7d5&units=metric`);

    return respuesta.data.main.temp;

}


module.exports = {
    getClima
}