const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
    return usuarios;
}

const usuario = {
    nome: 'Joana'
}

const usuarios = [
    {
        nome: 'Joana'
    },
    {
        nome: 'Ana'
    },
    {
        nome: 'João'
    }
]

console.log(cadastroUsuarios(usuarios));
