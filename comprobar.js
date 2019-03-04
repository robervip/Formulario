function comprobar() {
  let nombre=document.getElementById('nombre').value;
  let numero=document.getElementById('numero').value;
  if(nombre.length==0) alert("El campo nombre está vacío");

  if (numero.length==0) {
    alert("El campo Numero esta vacío");
  }
  else if (!isNaN(numero)) {
    return false;
    alert("El campo Numero no es un numero");
  }
  else {
    alert("Todo bien");
  }
}
