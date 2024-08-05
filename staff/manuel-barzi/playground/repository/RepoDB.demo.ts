debugger

import repoDB from './RepoDB'

const repo = new repoDB

const main = async () => {
    try {
        await repo.connect()

        await repo.insert({ id: 1, value: 'hola mundo' })

        await repo.insert({ id: 2, value: 'hello world' })

        await repo.insert({ id: 3, value: 'ciao mondo' })

        await repo.deleteById(2)
    } catch (error) {
        console.error(error)
    } finally {
        await repo.disconnect()
    }
}

main()