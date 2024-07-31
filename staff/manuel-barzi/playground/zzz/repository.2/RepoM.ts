import { Doc, IRepo } from "./types"

class RepoM implements IRepo {
    col: Doc[] = []

    insert(doc: Doc) {
        this.col.push(doc)
    }

    deleteById(id: number) {
        const index = this.col.findIndex((doc: Doc) => doc.id === id)

        if (index > -1)
            this.col.splice(index, 1)
    }

    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): null | Doc {
        const doc = this.col.find(condition)

        return doc || null
    }
}

export default RepoM