function button(){
    const name= document.getElementById('nombre').value;
    const price= document.getElementById('precio').value;
    const stock= document.getElementById('stock').value;
    const brand= document.getElementById('marca').value;
    const category= document.getElementById('categoria').value;

if (name!=="" && price!=="" && stock!=="" && brand!=="" && category!=="" ){
    document.getElementById('enviar').disabled = false
    }
    }

document.getElementById("nombre").addEventListener("change", button)
document.getElementById("precio").addEventListener("change", button)
document.getElementById('stock').addEventListener("change", button)
document.getElementById('marca').addEventListener('change', button)
document.getElementById('categoria').addEventListener('change', button)
