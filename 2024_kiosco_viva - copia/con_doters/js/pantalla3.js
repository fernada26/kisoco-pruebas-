
let rescontador = 0;
let rescontador2 = 0;
let rescontador3 = 0;

const valor = document.querySelector(".count-adulto");
const botones = document.querySelectorAll (".btn1")
const valor2 = document.querySelector(".count-ninos");
const botones2 = document.querySelectorAll (".btn2")
const valor3 = document.querySelector(".count-infantes");
const botones3 = document.querySelectorAll (".btn3")

botones.forEach(btn1 =>{
    btn1.addEventListener("click", function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains("btn-aumentar")){
            rescontador++
        }
        else if(estilos.contains("btn-disminuir")){
            rescontador--
            if(rescontador <= 0){
                rescontador = 0
            }
        }

        valor.textContent = rescontador;
        
        // estilos //

        if(rescontador > 0){
            valor.style.color = "#305790";
        }
    })
})

/*---------------------*/
botones2.forEach(btn2 =>{
    btn2.addEventListener("click", function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains("btn-aumentar2")){
            rescontador2++
        }
        else if(estilos.contains("btn-disminuir2")){
            rescontador2--
            if(rescontador2 <= 0){
                rescontador2 = 0
            }
        }

        valor2.textContent = rescontador2;
        
        // estilos //

        if(rescontador2 > 0){
            valor2.style.color = "#305790";
        }
    })
})
/*---------------------*/
botones3.forEach(btn3 =>{
    btn3.addEventListener("click", function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains("btn-aumentar3")){
            rescontador3++
        }
        else if(estilos.contains("btn-disminuir3")){
            rescontador3--
            if(rescontador3 <= 0){
                rescontador3 = 0
            }
        }

        valor3.textContent = rescontador3;
        
        // estilos //

        if(rescontador3 > 0){
            valor3.style.color = "#305790";
        }
    })
})
/*---------------------*/
