debugger

import RepoM from './RepoM'

const repo = new RepoM

console.log(repo)

const main = async () => {
    try {
        await repo.insert({ id: 1, value: 'hola mundo' })

        console.log(repo)

        await repo.insert({ id: 2, value: 'hello world' })

        console.log(repo)

        await repo.insert({ id: 3, value: 'ciao mondo' })

        console.log(repo)

        await repo.deleteById(2)

        console.log(repo)
    } catch (error) {
        console.error(error)
    }
}

main()