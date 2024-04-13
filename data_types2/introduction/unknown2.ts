const data = JSON.parse('{ "name": "Joana" }') as unknown;

if (
    data !== null &&
    typeof data === 'object' &&
    'name' in data &&
    typeof data.name === 'string'
) {
    console.log('O data.name é uma string.');
} else {
    console.log('JSON inválido.');
};