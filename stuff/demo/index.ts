type User = {
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string
}

const peter: User = {
    name: 'Peter',
    surname: 'Pan',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
}

console.log(peter)

const wendy: User = {
    name: 'Wendy',
    surname: 'Darling',
    email: 'wendy@darling',
    username: 'wendydarling',
    password: '123123123'
}

console.log(wendy)

function printUser(user: User) {
    console.log(user)
}

printUser({ name: 'Pepito', surname: 'Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })