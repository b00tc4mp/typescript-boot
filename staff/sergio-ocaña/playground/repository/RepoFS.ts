import { readFileSync, writeFileSync } from 'fs'

type Doc = {
    id: number,
    value: any
}

class RepoFS {
    insert(doc: Doc) {
        let colJSON = readFileSync("./col.json", "utf-8");

        const col = JSON.parse(colJSON);

        col.push(doc);

        colJSON = JSON.stringify(col);

        writeFileSync("./col.json", colJSON);
    }

    deleteById(id: number) {
        let colJSON = readFileSync("./col.json", "utf-8");

        const col = JSON.parse(colJSON);

        const index = col.findIndex((doc: Doc) => doc.id === id);

        if (index > -1)
            col.splice(index, 1);

        colJSON = JSON.stringify(col);

        writeFileSync("./col.json", colJSON);
    }
}
export default RepoFS
