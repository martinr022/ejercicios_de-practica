
let orden=window.prompt("Por favor, ingresa una opcion:", "Escribe aquí")


function validarMenu(){
switch (orden) {
    case "pescado":
        console.log("¿Desea beber vino ?");
        
        break;
        case "carne":
            console.log("¿Desea beber vino tinto?");
        
        break;
        case "verdura":
        console.log("¿Desea beber agua?");
        break;
    default:console.log("por favor elija una opcion del menu")
        break;
}
}
validarMenu();