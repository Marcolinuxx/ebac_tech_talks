AOS.init();

const dataDoEvento = new Date("Oct 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteoEvento / diaEmMs);
    const horasAteoEvento = Math.floor((distanciaAteoEvento % diaEmMs) / horaEmMs);
    const minutosAteoEvento = Math.floor((distanciaAteoEvento % horaEmMs) / minutoEmMs);
    const segundosAteoEvento = Math.floor((distanciaAteoEvento % minutoEmMs) / 1000);

    console.log(diasAteoEvento);
    console.log(horasAteoEvento);
    console.log(minutosAteoEvento);
    console.log(segundosAteoEvento);

    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;

    if(distanciaAteoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);