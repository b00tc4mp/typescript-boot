debugger

import repoDB from './repoDB'

const repo = new repoDB

repo.connect()
    .then(() =>
        repo.insert({ id: 1, value: 'hola mundo' })
            .then(() => repo.insert({ id: 2, value: 'hello world' }))
            .then(() => repo.insert({ id: 3, value: 'ciao mondo' }))
            .then(() => repo.deleteById(2))
            .catch(error => console.error(error))
    )
    .then(() => repo.disconnect())
