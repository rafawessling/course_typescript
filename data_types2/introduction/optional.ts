type Produto = {
    nome: string;
    valor?: number;
}

const cadastroProduto = (info?: Produto) => {
    console.log(`Você cadastrou "${info!.nome}"`);
};

cadastroProduto({
    nome: 'Gol 2020',
});
