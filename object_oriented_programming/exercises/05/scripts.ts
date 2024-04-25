class Empresa {
    nome: string;
    fantasia: string;
    cnpj: number;
    telefone: number;

    constructor(
        nome: string,
        fantasia: string,
        cnpj: number,
        telefone: number
    ) {
        this.nome = nome;
        this.fantasia = fantasia;
        this.cnpj = cnpj;
        this.telefone = telefone;
    }

    get getNome(): string {
        return this.nome
    }

    get getFantasia(): string {
        return this.fantasia
    }

    get getCnpj(): number {
        return this.cnpj
    }

    get getTelefone(): number {
        return this.telefone
    }

    set setFantasia(fantasia: string) {
        this.fantasia = fantasia
    }
}