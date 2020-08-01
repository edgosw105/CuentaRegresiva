//===
// VARIABLES
//===
const SIETE_AGOSTO = new Date('08/07/2022 12:00 PM'); //MES/DIAS/AÑO
// DOM for render
const SPAN_ANIOS = document.getElementById('anios');
const SPAN_MESES = document.getElementById('meses');
const SPAN_DIAS = document.getElementById('dias');
const SPAN_HORAS = document.getElementById('horas');
const SPAN_MINUTOS = document.getElementById('minutos');
const SPAN_SEGUNDOS = document.getElementById('segundos');
const SPAN_SUCESO = document.getElementById('suceso1');
const SPAN_SUCESO_DOS = document.getElementById('suceso2');
// Milliseconds for the calculations
const MILISEGUNDOS_SEGUNDO = 1000;
const MILISEGUNDOS_MINUTO = MILISEGUNDOS_SEGUNDO * 60;
const MILISEGUNDOS_HORA = MILISEGUNDOS_MINUTO * 60;
const MILISEGUNDOS_DIA = MILISEGUNDOS_HORA * 24;
const MILISEGUNDOS_MES = MILISEGUNDOS_DIA * (365/12);
const MILISEGUNDOS_ANIO = MILISEGUNDOS_MES * 12;

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function actualizarDatos() {
    // Calcs
    const HORA = new Date();
    const DIFERENCIA = Math.abs(SIETE_AGOSTO - HORA);

    if (SIETE_AGOSTO > HORA) {
      // console.log('no se ha ido');
    }else {
      SPAN_SUCESO.textContent = 'Han pasado';
      SPAN_SUCESO_DOS.textContent = 'Desde que Duque se fue de la Casa de Nariño';
      // console.log('ya se fue');
    }

    const ANIOS_RESTANTES = Math.floor(DIFERENCIA / MILISEGUNDOS_ANIO);
    const MESES_RESTANTES = Math.floor((DIFERENCIA % MILISEGUNDOS_ANIO) / MILISEGUNDOS_MES);
    // const DIAS_RESTANTES = Math.floor(DIFERENCIA / MILISEGUNDOS_DIA);
    const DIAS_RESTANTES = Math.floor((DIFERENCIA % MILISEGUNDOS_MES) / MILISEGUNDOS_DIA);
    const HORAS_RESTANTES = Math.floor((DIFERENCIA % MILISEGUNDOS_DIA) / MILISEGUNDOS_HORA);
    const MINUTOS_RESTANTES = Math.floor((DIFERENCIA % MILISEGUNDOS_HORA) / MILISEGUNDOS_MINUTO);
    const SEGUNDOS_RESTANTES = Math.floor((DIFERENCIA % MILISEGUNDOS_MINUTO) / MILISEGUNDOS_SEGUNDO);
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Render
    SPAN_ANIOS.textContent = ANIOS_RESTANTES;
    SPAN_MESES.textContent = MESES_RESTANTES;
    SPAN_DIAS.textContent = DIAS_RESTANTES;
    SPAN_HORAS.textContent = HORAS_RESTANTES;
    SPAN_MINUTOS.textContent = MINUTOS_RESTANTES;
    SPAN_SEGUNDOS.textContent = SEGUNDOS_RESTANTES;
}

//===
// INIT
//===
actualizarDatos();
// Refresh every second
setInterval(actualizarDatos, MILISEGUNDOS_SEGUNDO);
