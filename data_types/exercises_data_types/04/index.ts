type Produto = {
    produto: string;
    lote: number;
    ano: number;
    qtd: number
}

const geradorEtiqueta = (infoProduto: Produto): string[] => {
    const resultados: string[] = [];

    for (let i = 1; i <= infoProduto.qtd; i++) {
        const resultado = `${infoProduto.lote}-${infoProduto.ano}-${i.toString().padStart(3, '0')}`;
        resultados.push(resultado);
    }
    return resultados;
};

const infoProduto: Produto = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5,
};

console.log(geradorEtiqueta(infoProduto));
