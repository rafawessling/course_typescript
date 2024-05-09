type ClientType = {
    name: string,
    email: string,
    cpf: string
}

type Address = {
    zipCode: string,
    street: string,
    neighborhood: string,
    city: string
}

export class Client {
    name: string;
    email: string;
    cpf: string;
    registrationDate: Date;
    addresses: Address[];

    constructor(client: ClientType) {
        this.name = client.name;
        this.email = client.email;
        this.cpf = client.cpf;
        this.registrationDate = new Date();
        this.addresses = [];
    }

    addAddress(address: Address) {
        this.addresses.push(address);
    }
}