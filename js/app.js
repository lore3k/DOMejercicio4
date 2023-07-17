
function obtenerFecha(){
    let fecha = document.querySelector('#fecha'); 
    let hora = document.querySelector('#hora');
    let ampm = document.querySelector('#ampm');
    let segundos = document.querySelector('#segundos'); 
    let fechaActual = new Date();
    
    ampm.innerHTML='AM'

    let soloHora = fechaActual.getHours();

    if((soloHora>12)){
        soloHora= soloHora-12;
        ampm.innerHTML='PM';
    }else{
        if(soloHora===12){
            ampm.innerHTML='PM';    
        }else{
            if(soloHora===0){
                soloHora=12;
            } 
        }
    }

    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    if(soloHora < 10){
        if(fechaActual.getMinutes()<10){
            hora.innerHTML =`0${soloHora}:0${fechaActual.getMinutes()}:`
        }else{
            hora.innerHTML =`0${soloHora}:${fechaActual.getMinutes()}:`
        }
    }else if(fechaActual.getMinutes()<10){
        hora.innerHTML =`${soloHora}:0${fechaActual.getMinutes()}:`
    }else{
        hora.innerHTML =`${soloHora}:${fechaActual.getMinutes()}:`
    }
    
    if(fechaActual.getSeconds() < 10){
        segundos.innerHTML =`0${fechaActual.getSeconds()}`
    }else{
        segundos.innerHTML =` ${fechaActual.getSeconds()}`
    } 
}

setInterval(obtenerFecha,1000);