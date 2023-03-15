    // <!-- cambiar estilo -->

    const logoGym= document.querySelector("#switchStyle")
    const linkTag=document.getElementById("styles");
    var num=0
    logoGym.addEventListener("click", e=>{
        if(num%2){
            linkTag.href = "../styles/style2.css"
            console.log("AHORA ESTAS EN EL ESTILO 2")
        }else {
            linkTag.href = "../styles/style.css"
            console.log("AHORA ESTAS EN EL ESTILO 1")
        }
    })
    function switchStyle(){
        console.log("CAMBIASTE DE ESTILO")
        num+=1


    }

    