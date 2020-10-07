//Variables a usar
let id_cajas ="cajita"
// Cuando la pagina se cargue ejecutar la grid 
document.addEventListener('DOMContentLoaded', function(){
  let filas = 16;
  let columnas = 16;
  let cant_cajitas = filas * columnas; //  son 16 filas por 16 columnas
  //creacion de cada uno de las cajitas  requeridas por The odin project https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

  for (let i = 1; i <= cant_cajitas; i++) {
    let div = [];
    div[i] = document.createElement("div");
    div[i].id = id_cajas;
    // div[i].innerHTML = i;

    document.getElementById("contenedor").appendChild(div[i]);
 
  }

})





let contenedor = document.createElement("div");
// se crea un atributo 
let atributo=document.createAttribute("id");
//se le da un valor al atributo
atributo.value="cajitas";
// el atributo se le debe relacionar con el contenedor 
contenedor.setAttributeNode(atributo);

