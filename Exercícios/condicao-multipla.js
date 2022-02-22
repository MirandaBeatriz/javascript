let signo = input;

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
	case 'Touro':
    console.log("De 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("De 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("De 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("De 23 agosto a 22 setembro");
    break;
  default:
  	console.log("Signo não registrado");
    break;
}
