var idp=1;
var long=0;

const url = "https://zackdeadgm.github.io/ApiGato/ApiGato.json";

function buscar(){

    fetch(url)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        console.log(data.figures);
        long=data.figures.length;
        console.log("lenght:"+ long);
    
        var res= data.figures.filter(item=>item.id===idp);
        console.log(res);
        var imagen=document.getElementById('pkm-img');
        imagen.src=res[0].img;
        var p1=document.getElementById('name');
        p1.innerHTML="<b>Gato </b>"+res[0].name;
        var p2=document.getElementById('type');
        p2.innerHTML="<b>Nombre cientifico: </b>"+res[0].Nombre_científico;
        var p3=document.getElementById('height');
        p3.innerHTML="<b>Vida media: </b>"+res[0].Vida_media;
        var p4=document.getElementById('weight');
        p4.innerHTML="<b>Tamaño: </b>"+res[0].Tamaño;
        var p5=document.getElementById('des');
        p5.innerHTML="<b>Peso: </b>"+res[0].Peso;
        var p6=document.getElementById('Origen');
        p6.innerHTML="<b>Origen: </b>"+res[0].Origen
    })

    .catch(function(error){
        console.log(error);           
    });

    if (idp >= long){
        idp=1;
    }else{
        idp++;
    }
    
}    