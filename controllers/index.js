const clientCtrl = {};

const firebase = require('./firebase');

clientCtrl.getClients = async (req, res, next) => {  };

//lanzarSiempreALaHora(12, 30);
tarea();
function lanzarSiempreALaHora(horas, minutos) {

    var ahora = new Date();
    console.log('lanzado', ahora);

    var momento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), horas - 6, minutos);
    
    if(momento <= ahora){ // la hora era anterior a la hora actual, debo sumar un día
        momento = new Date(momento.getTime() + 1000 * 60 * 60 * 24);
    }

    console.log('para ser ejecutado en', momento);

    setTimeout(function(){
        tarea();
        lanzarSiempreALaHora(horas, minutos);
    }, momento.getTime()-ahora.getTime());

}
function tarea() {
    firebase.getData();
}

module.exports = clientCtrl;