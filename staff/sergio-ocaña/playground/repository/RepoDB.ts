import { MongoClient } from 'mongodb'

import { Doc, IRepo } from './types.ts'


class RepoDB implements IRepo {
    client: MongoClient

    async connect(): Promise<void> {
        this.client = new MongoClient('mongodb://localhost/repository')

        await this.client.connect();
    }

    async disconnect(): Promise<void> {
        await this.client.close();
    }

    async insert(doc: Doc): Promise<void> {
        const col = this.client.db().collection('col');

        await col.insertOne(doc)
    }

    async deleteById(id: number): Promise<void> {
        const col = this.client.db().collection('col');

        await col.deleteOne({ id }).then(() => { });
    }

    async find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        const col = this.client.db().collection('col');

        const docs = await col.find({}).toArray()

        let docs2 = docs.map(({ id, value }) => ({ id, value } as Doc));

        const doc = docs2.find(condition);

        return doc || null;

    }
}

export default RepoDB