if (this.localStorage.getItem("jwt")){

  window.addEventListener("load", function () {
    
    let etiquetaSaludo = this.document.querySelector("#saludo");
    console.log(this.localStorage.getItem("jwt"))
    console.log(JSON.stringify(this.localStorage.getItem("jwt")));
    etiquetaSaludo.innerHTML = `Hola ${this.localStorage.getItem("jwt")}`
  
    let botonCerrarSesion= this.document.querySelector("#cerrarSession");
    botonCerrarSesion.addEventListener("click",()=>{
      if(this.confirm("Desea cerrar la sesion?")){
        localStorage.removeItem("jwt");
        alert("Los datos de la sesion se borraron");
        location.replace("./index.html");
      }
    })
  })
}else{
  location.replace("./index.html");
}