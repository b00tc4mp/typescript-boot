type Doc = {
    id: number,
    value: any
}

class Repo {
    col: Doc[] = []

    insert(doc: Doc) {
        this.col.push(doc)
    }

    deleteById(id: number) {
        const index = this.col.findIndex((doc: Doc) => doc.id === id)

        if (index > -1)
            this.col.splice(index, 1)
    }
}

export default Repo