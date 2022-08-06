function accioncuandoelladigaquesi(){
    alert("Jejeje sabia que dirias que si -///-");
}

function mueveElBoton(){
    width = windows.innerWidth;
    height = Windows.innerHeight

    newWidht = (Math.random() * width);
    newHeight = (Math.random() * height);

    document.getElemntById('btnNo').style.position = "absolute";
    document.getElemntById('btnNo').style.left = newWidht + "px";
    document.getElemntById('btnNo').style.top = newHeight + "px";
}