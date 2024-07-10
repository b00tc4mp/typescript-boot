debugger

import Repo from './Repo'

const repo = new Repo

console.log(repo)

repo.insert({ id: 1, value: 'hola mundo' })

console.log(repo)

repo.insert({ id: 2, value: 'hello world' })

console.log(repo)

repo.insert({ id: 3, value: 'ciao mondo' })

console.log(repo)

repo.deleteById(2)

console.log(repo)
