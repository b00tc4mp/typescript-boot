// STANDBY

import { MongoClient } from 'mongodb'

type Doc = {
    id: number,
    value: any
}

class RepoDB {
    constructor() {
        const client = new MongoClient('mongodb://localhost/repository')

        client.connect()
            .then(connection => {

            })
    }

    insert(doc: Doc) {
        // this.col.push(doc)
    }

    deleteById(id: number) {
        // const index = this.col.findIndex((doc: Doc) => doc.id === id)

        // if (index > -1)
        //     this.col.splice(index, 1)
    }
}

export default RepoDB