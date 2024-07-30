debugger

import RepoDB from './RepoDB.ts'

const repo = new RepoDB

const main = async () => {
    try {
        await repo.insert({ id: 1, value: 'hola mundo' })

        await repo.insert({ id: 2, value: 'hello world' })

        await repo.insert({ id: 3, value: 'ciao mondo' })

        await repo.deleteById(2)

    } catch (error) {
        console.error(error)
    } finally {
        repo.disconnect()
    }
}

main()