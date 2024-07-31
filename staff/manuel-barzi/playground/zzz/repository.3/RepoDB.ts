import { MongoClient } from 'mongodb'

import { Doc, IRepo } from './types'


class RepoDB implements IRepo {
    client: MongoClient

    connect(): Promise<void> {
        this.client = new MongoClient('mongodb://localhost/repository')

        return this.client.connect().then(() => { })
    }

    disconnect(): Promise<void> {
        return this.client.close()
    }

    insert(doc: Doc): Promise<void> {
        const col = this.client.db().collection('col')

        return col.insertOne(doc).then(() => { })
    }

    deleteById(id: number): Promise<void> {
        const col = this.client.db().collection('col')

        return col.deleteOne({ id }).then(() => { })
    }

    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        const col = this.client.db().collection('col')

        return col.find({}).toArray()
            .then(col => {
                let col2 = col.map(({ id, value }) => ({ id, value } as Doc))

                const doc = col2.find(condition)

                return doc || null
            })
    }
}

export default RepoDB