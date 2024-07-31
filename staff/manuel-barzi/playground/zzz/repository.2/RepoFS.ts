import { readFileSync, writeFileSync } from 'fs'

import { Doc, IRepo } from "./types"

class RepoFS implements IRepo {
    insert(doc: Doc) {
        let colJSON = readFileSync("./col.json", "utf-8")

        const col = JSON.parse(colJSON)

        col.push(doc)

        colJSON = JSON.stringify(col)

        writeFileSync("./col.json", colJSON)
    }

    deleteById(id: number) {
        let colJSON = readFileSync("./col.json", "utf-8")

        const col = JSON.parse(colJSON)

        const index = col.findIndex((doc: Doc) => doc.id === id)

        if (index > -1)
            col.splice(index, 1)

        colJSON = JSON.stringify(col)

        writeFileSync("./col.json", colJSON)
    }

    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): null | Doc {
        let colJSON = readFileSync("./col.json", "utf-8")

        const col = JSON.parse(colJSON)

        const doc = col.find(condition)

        return doc || null
    }
}

export default RepoFS