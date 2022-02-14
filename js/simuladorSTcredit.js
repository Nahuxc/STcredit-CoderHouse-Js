////////////////////marcador de linea telefonica///////

let marcador, plan, clienteN;

let saldo = 0, pack1 = 200, pack2 = 500, pack3 = 1000;

let gb = 0, gb10 = 10, gb20 = 20;

/////////////arrays//////////////////////

let planes = [];

///////////////////////Menu Registro////////////////////////////////
function registrate(clienteN){
    do{
        clienteN = prompt(`Registrate: Ingresa tu nombre`);
        if(clienteN.length <= 1 ){
            alert("el nombre debe tener mas de 2 caracteres")
            backR();
        }else{
            alert("Bienvenido a STcredit")
            let edad = prompt(`
            En caso de no ser mayor a 18 no podra ingresar
            Ingresa tu edad:`);
            if(edad >= 18){
                alert("Puedes Ingresar a la plataforma")
                break;
            }else{
                alert("No puedes ingresar eres menor de edad")
            }
        }
    }
    while(plan != 0)
}

//////////////////llamada de funciones////////////////////
registrate(clienteN);

function backR(){
    registrate(clienteN);
}

menuOp1(plan);

///////////////////////menu Principal////////////////////////////////
function menuOp1(plan){
    do {
        plan = prompt(`
        Elegi tu opcion
        (1) Cargar/ver Saldo
        (2) Plan/abono
        (3) Salir`);
        if(plan == 1){
            menuOp2();
        }else if(plan == 2){
            let abono = parseInt(prompt(`para adquirir 10gb seleccione (1)`))
            if(abono == 1){
                let cantidad = prompt("para asociarse al plan seleccione (1)");
                for(i = 0; i < cantidad; i++){
                    planes[i] = [prompt(`nombre del asociado al plan`+ (i + 1))];
                    gb += gb10;
                    alert(`obtuviste ${gb + "gb"} estas asociado al plan como ${planes[i]}` )
                }
            }
        }else if(plan == 3 || plan == "salir"){
            alert("has abandonado el programa")
            break;
        }else{
            alert("el numero es incorrecto vuelve a intentarlo")
            back();
        }
    }

    while(plan != 3);
}


//opcion de atras menu Principal
function back(){
    menuOp1(plan);
}


///////////////////////Menu Secundario////////////////////////////////
function menuOp2(marcador){
    marcador = parseInt(prompt(`
    Presione
    1) ver saldo y GB
    2) comprar un pack
    3) Recargar credito
    4) volver`));
    if((marcador == 1)){
        alert(`
        tu saldo es ${"$" + saldo}
        sus gb son: ${ gb + "GB"}`);
        atras();
    }else if((marcador == 2)){
        let packSelect = prompt(`
        selecciona tu pack
        (1)$200 medium
        (2)$500 hard
        (3)$1000 extraHard
        (0) volver`);
        if(packSelect == 1){
            saldo = saldo + pack1;
            alert("has comprado el de $200");
            atras();
        }else if(packSelect == 2){
            saldo = saldo + pack2;
            alert("has comprado el de $500");
            atras();
        }else if(packSelect == 3){
            saldo = saldo + pack3;
            alert("has comprado el de $1000");
            atras();
        }else if(packSelect = 0){
            alert(`has vuelto al menu`);
            atras();
        }
    }else if(marcador == 3){
        let recargar = parseInt(prompt("Ingrese la cantidad de saldo que quiere cargar"));
        if(saldo = saldo + recargar){
            alert(`tienes: ${"$" + saldo}, gracias por su compra!`);
            atras();
        }
    }else if(marcador == 4){
        alert("has vuelto al menu principal");
        back();
    }else{
        alert("el numero es incorrecto vuelve a intentarlo")
        atras();
    }
}
//opcion de atras menu secundario
function atras(){
    menuOp2(marcador);
}