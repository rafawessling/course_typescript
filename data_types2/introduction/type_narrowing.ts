const cadastroInfo = (texto: string | number) => {
    if (typeof texto === 'string') {
        return texto.toUpperCase();
    } else {
        return texto.toFixed(2);
    }
};

console.log(cadastroInfo(100 / 4));
