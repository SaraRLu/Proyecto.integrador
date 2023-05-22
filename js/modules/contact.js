function button1(){
    const name= document.getElementById("nombre").value;
    console.log(name)
    const email= document.getElementById("email").value;
    console.log(email)
            
    if (name!== "" && email!==""){
        document.getElementById('enviar').disabled = false
        }
    }
    
    document.getElementById("nombre").addEventListener("change", boton1)
    document.getElementById("email").addEventListener("change", boton1)