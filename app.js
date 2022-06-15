const ene = document.querySelector('#ene');
const feb = document.querySelector('#feb');
const mar = document.querySelector('#mar');
const abr = document.querySelector('#abr');
const may = document.querySelector('#may');
const jun = document.querySelector('#jun');
const jul = document.querySelector('#jul');
const ago = document.querySelector('#ago');
const set = document.querySelector('#set');
const oct = document.querySelector('#oct');
const nov = document.querySelector('#nov');
const dic = document.querySelector('#dic');

const btnCambiarGrafico = document.querySelector('#btnCambiarGrafico'); 
const btnGrafico = document.querySelector('#btnGrafico');
const btnCargarBD = document.querySelector('#cargarBD');

let data = [];

addEventListeners()


function addEventListeners() {
    
    btnGrafico.addEventListener('click', mostrarGrafico);

    btnCargarBD.addEventListener('click', cargarBD);

    btnCambiarGrafico.addEventListener('click', alternarGrafico);

}

function mostrarGrafico(){
    let datoEne = ene.value;
    console.log(datoEne);
    let datoFeb = feb.value;
    console.log(datoFeb);
    let datoMar = mar.value;
    console.log(datoMar);
    let datoAbr = abr.value;
    console.log(datoAbr);
    let datoMay = may.value;
    console.log(datoMay);
    let datoJun = jun.value;
    console.log(datoJun);
    let datoJul = jul.value;
    console.log(datoJul);
    let datoAgo = ago.value;
    console.log(datoAgo);
    let datoSet = set.value;
    console.log(datoSet);
    let datoOct = oct.value;
    console.log(datoOct);
    let datoNov = nov.value;
    console.log(datoNov);
    let datoDic = dic.value;
    console.log(datoDic);

    data = [
        datoEne,
        datoFeb,
        datoMar,
        datoAbr,
        datoMay,
        datoJun,
        datoJul,
        datoAgo,
        datoSet,
        datoOct,
        datoNov,
        datoDic,
    ]

    console.log(data)

    myChart.data.datasets[0].data[0] = datoEne;
    myChart.data.datasets[0].data[1] = datoFeb;
    myChart.data.datasets[0].data[2] = datoMar;
    myChart.data.datasets[0].data[3] = datoAbr;
    myChart.data.datasets[0].data[4] = datoMay;
    myChart.data.datasets[0].data[5] = datoJun;
    myChart.data.datasets[0].data[6] = datoJul;
    myChart.data.datasets[0].data[7] = datoAgo;
    myChart.data.datasets[0].data[8] = datoSet;
    myChart.data.datasets[0].data[9] = datoOct;
    myChart.data.datasets[0].data[10] = datoNov;
    myChart.data.datasets[0].data[11] = datoDic;

    myChart.update();

}

function alternarGrafico(){

    if (myChart.config.type == 'bar'){

        myChart.config.type = 'line';

        myChart.update();

    }

    else {

        myChart.config.type = 'bar';
        myChart.update();
    }


    
}

function cargarBD() {


    
}