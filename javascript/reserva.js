botonReserva = document.getElementById("botonReserva");
botonReserva.addEventListener("click", () =>{
    saludo = prompt("Hola! Ingrese su nombre para realizar la compra!");
    console.log("Nombre: " +saludo);
    alert("Hola " + saludo + "! Cinema Kent!");

    const peli1 = "GREMLINS";
    const peli2 = "DONNIE DARKO";
    const peli3 = "HALLOWEEN";
    const peli4 = "JURASSIC PARK";
    const peli5 = "POLTERGEIST";
    const peli6 = "SCREAM";
    const peli7 = "THE BURNING";
    const peli8 = "THE CABIN IN THE WOODS";
    const peli9 = "THE CITY OF LOST CHILDRENS";
    const peli10 = "THE INVISIBLE MAN";
    const peli11 = "THE LION KING";
    const peli12 = "TOY STORY";

    const horarios1 = "10:00 HS";
    const horarios2 = "12:00 HS";
    const horarios3 = "14:00 HS";
    const horarios4 = "15:00 HS"
    const horarios5 = "16:00 HS"

    const dia1 = "Lunes";
    const dia2 = "Martes";
    const dia3 = "Miercoles";
    const dia4 = "Jueves";
    const dia5 =  "Viernes";

    const entradaMenor= "Entrada Menor";
    const entradaAdulto = "Entrada Adulto";
    const entradaJubilado = "Entrada Jubilado";

    let precioMenor = 800;
    let preciAdulto = 1500;
    let precioJubilado = 1000;

    function compra(pelicula, horario, dia, entrada){
        alert("Resumen de tu compra: \n Pelicula: " + pelicula +" - Horario "+ horario + " - Dia " + dia +" - " + entrada);
    }
    compra(eleccionPelicula(), eleccionHorario(), eleccionDia(), eleccionEntrada());

    function eleccionPelicula(){
        let eleccionPelicula = prompt("Ingrese el numero de la pelicula que desea ver:\n 1- GREMLINS\n 2- DONNIE DARKO \n 3- HALLOWEEN \n 4- JURASSIC PARK \n 5- POLTERGEIST \n 6- SCREAM \n 7- THE BURNING \n 8- THE CABIN \n 9- LOST CHILDRENS \n 10- INVISIBLE MAN \n 11- LION KING \n 12- TOY STORY");
        console.log("Producto: " +eleccionPelicula);
        switch (eleccionPelicula) {
            case "1":
                alert("Elegiste la pelicula: " + peli1);
                return eleccionPelicula = peli1;
            case "2":
                alert("Elegiste la pelicula: " + peli2);
                return eleccionPelicula = peli2;
            case "3":
                alert("Elegiste la pelicula: " + peli3);
                return eleccionPelicula = peli3;
            case "4":
                alert("Elegiste la pelicula: " + peli4);
                return eleccionPelicula = peli4;
            case "5":
                alert("Elegiste la pelicula: " + peli5);
                return eleccionPelicula = peli5;
            case "6":
                alert("Elegiste la pelicula: " + peli6);
                return eleccionPelicula = peli6;
            case "7":
                alert("Elegiste la pelicula: " + peli7);
                return eleccionPelicula = peli7;
            case "8":
                alert("Elegiste la pelicula: " + peli8);
                return eleccionPelicula = peli8;
            case "9":
                alert("Elegiste la pelicula: " + peli9);
                return eleccionPelicula = peli9;
            case "10":
                alert("Elegiste la pelicula: " + peli10);
                return eleccionPelicula = peli10;
            case "11":
                alert("Elegiste la pelicula:"  + peli11);
                return eleccionPelicula = peli11;
            case "12":
                alert("Elegiste la pelicula: " + peli12);
                return eleccionPelicula = peli12;
            default:
                alert("Pelicula no disponible en cartelera");
                return eleccionPelicula = "No existe";
        }
    }

    function eleccionHorario(){
        let eleccionHorario = prompt("Ingrese el numero del horarios elegido: \n1- 10:00Hs \n2- 12:00HS \n3- 14:00HS \n4- 15:00HS \n5- 16:00HS");
        console.log("Horario: " +eleccionHorario);
        while(isNaN(eleccionHorario)){
            eleccionHorario = prompt("Horarios: \n10:00Hs \n12:00HS \n14:00HS \n15:00HS \n16:00HS");
        }
        switch (eleccionHorario) {
            case "1":
                alert("Seleccionaste el horario de las: " + horarios1);
                return eleccionHorario = horarios1;
            case "2":
                alert("Seleccionaste el horario de las: " + horarios2);
                return eleccionHorario = horarios2;
            case "3":
                alert("Seleccionaste el horario de las: " + horarios3);
                return eleccionHorario = horarios3;
            case "4":
                alert("Seleccionaste el horario de las: " + horarios4);
                return eleccionHorario = horarios4;
            case "5":
                alert("Seleccionaste el horario de las: " + horarios5);
                return eleccionHorario = horarios5;
            default:
                alert("Horario no disponible");
                return eleccionHorario = "Horario No Disponible";
        }
    }

    function eleccionDia(){
        let eleccionDia = prompt("Ingrese el numero del dia elegido: \n1- Lunes \n2- Martes \n3- Miercoles \n4- Jueves \n5- Viernes");
        console.log("Dia: " +eleccionDia);
        while(isNaN(eleccionDia)){
            eleccionDia = prompt("Dias: \n1- Lunes \n2-Martes 12:00HS \n3- Miercoles \n4- Jueves \n5- Viernes");
        }
        switch (eleccionDia) {
            case "1":
                alert("Seleccionaste dia: " + dia1);
                return eleccionDia = dia1;
            case "2":
                alert("Seleccionaste dia: " + dia2);
                return eleccionDia = dia2;
            case "3":
                alert("Seleccionaste dia: " + dia3);
                return eleccionDia = dia3;
            case "4":
                alert("Seleccionaste dia: " + dia4);
                return eleccionDia = dia4;
            case "5":
                alert("Seleccionaste dia: " + dia5);
                return eleccionDia = dia5;
            default:
                alert("Dia no disponible");
                return eleccionDia = "Dia No Disponible";
        }
    }

    function eleccionEntrada(){
        let eleccionEntrada = prompt("Ingrese el numero correspondiente a su entrada: \n1- Menor \n2- Adulto \n3- Jubilado");
        console.log("Entrada: " +eleccionEntrada);
        while(isNaN(eleccionEntrada)){
            eleccionEntrada = prompt("Seleccione su entrada: \n1- Menor \n2- Adulto \n3- Jubilado");
        }
        switch (eleccionEntrada) {
            case "1":
                alert("Seleccionaste: " + entradaMenor +" $"+ precioMenor);
                return eleccionEntrada = entradaMenor + " $" + precioMenor;
            case "2":
                alert("Seleccionaste: " + entradaAdulto + " $"+ preciAdulto);
                return eleccionEntrada = entradaAdulto + " $" + preciAdulto;
            case "3":
                alert("Seleccionaste: " + entradaJubilado +" $"+ precioJubilado);
                return eleccionEntrada = entradaJubilado + " $" + precioJubilado;
            default:
                alert("Entrada no valida");
                return eleccionEntrada = "Entrada no valida";
        }
    }
})



