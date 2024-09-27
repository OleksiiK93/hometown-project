var attractions, gm_links;


attractions = [
    'Golden Gate', 
    'Kyiv-Pechersk Lavra', 
    'Ukrainian Motherland Monument'
];
gm_links = [
    'https://www.google.com/maps/place/Golden+Gate/@50.4490158,30.5129898,918m/data=!3m1!1e3!4m6!3m5!1s0x40d4ce59e3ab65a7:0x694b8565cab02eaf!8m2!3d50.448872!4d30.5129411!16zL20vMDdxczZr?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D',
    'https://www.google.com/maps/place/Kyiv-Pechersk+Lavra/@50.4346409,30.5546809,919m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40d4cfa04a0c8e5b:0x3b40a2bcbca08807!8m2!3d50.4346375!4d30.5572558!16zL20vMDJmZGtq?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D',
    'https://www.google.com/maps/place/Ukrainian+Motherland+Monument/@50.4273174,30.5621064,615m/data=!3m1!1e3!4m14!1m7!3m6!1s0x40d4cfa04a0c8e5b:0x3b40a2bcbca08807!2sKyiv-Pechersk+Lavra!8m2!3d50.4346375!4d30.5572558!16zL20vMDJmZGtq!3m5!1s0x40d4cf76e65d4dad:0x247b398f405dff8f!8m2!3d50.4265249!4d30.5630521!16s%2Fm%2F04jpnty?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D'
];


document.getElementById('show-attractions').addEventListener('click', (event) => {
  while (!!attractions.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_links = document.getElementById('attractions-list');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = attractions.shift();
    new_a.setAttribute("href", gm_links.shift());
    new_a.setAttribute("target", "_blank")

    new_li.appendChild(new_a);

    element_links.appendChild(new_li);
  }

});