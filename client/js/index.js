var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

document.querySelector(".form").addEventListener("click", function(evento){
    evento.preventDefault();
    var tr = document.createElement("tr");
    campos.forEach(campo => {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });
    var volume = document.createElement("td");    
    volume.textContent = (campos[1].value * campos[2].value);
    console.log("campos 1: "+volume);
    tr.appendChild(volume);
    var tbody = document.querySelector("table tbody");//passa peslo pai table e vai p o filho tbody
    tbody.appendChild(tr);

    campos[0].value = "";
    campos[1].value = "1";
    campos[2].value = "0.00";

    campos[0].focus();
});

console.log(campos);