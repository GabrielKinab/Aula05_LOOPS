function pedir() {
    var valor = prompt('Digite uma opção de 1 a 4');

    valor = Number(valor); // Converte o valor para número

    switch(valor) {
        case 1:
            alert('Você escolheu suco');
            break;
        case 2:
            alert('Você escolheu água gelada');
            break;
        case 3:
            alert('Você escolheu sorvete');
            break;
        case 4:
            alert('Você chamou o garçom');
            break;
        default:
            alert('Escolha de 1 até 4');
            break;
    }
}