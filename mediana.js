// const lista1 = [
//     100,
//     200,
//     500,
//     400000000
// ];



function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;
    // for (let i = 0; i< lista.length; i++ ) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
   
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



function esPar(numerito) {
    if (numerito % 2 === 0)
    {
        return true;  // par
    }
    else {
        return false;  // impar
    }
}


function calcularMediana(lista) {

    let mediana;

    const listaOrdenada = lista.sort((a, b) => a - b);

    const mitadlista = parseInt(listaOrdenada.length / 2);


    if (esPar(listaOrdenada.length)) { // par
        const elemento1 = listaOrdenada[mitadlista-1];
        const elemento2 = listaOrdenada[mitadlista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
    
    } else { // impar
        mediana = listaOrdenada[mitadlista]
    }

    return mediana;
}
