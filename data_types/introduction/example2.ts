const imprimir = (nome: string): string => {
    return `Olá ${nome}`;
};

const imprimirMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
};

const imprimirUsuario = (usuario: { nome: string; idade: number }): string => {
    return `Olá ${usuario.nome}`;
};

const imprimirArray = (array: string[]): string => {
    return array[0];
};

const imprimirSoma = (a: number, b: number): number => {
    return a + b;
}

console.log(imprimir('Joana'));
console.log(imprimirMaiorIdade(30));
console.log(imprimirUsuario({ nome: 'Joana', idade: 30 }));
console.log(imprimirArray(['Joana', 'Pedro', 'Ana']));
console.log(imprimirSoma(2, 3));
