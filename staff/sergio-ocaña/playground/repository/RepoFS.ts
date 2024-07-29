import { readFileSync, writeFileSync } from 'fs'

import { Doc, IRepo } from './types.ts';

class RepoFS implements IRepo {
    insert(doc: Doc): Promise<void> {
        return new Promise((resolve, rejected) => {

            let colJSON = readFileSync("./col.json", "utf-8");

            const col = JSON.parse(colJSON);

            col.push(doc);

            colJSON = JSON.stringify(col);

            writeFileSync("./col.json", colJSON);
            resolve()
        })
    }

    deleteById(id: number): Promise<void> {
        return new Promise((resolve, rejected) => {
            let colJSON = readFileSync("./col.json", "utf-8");

            const col = JSON.parse(colJSON);

            const index = col.findIndex((doc: Doc) => doc.id === id);

            if (index > -1)
                col.splice(index, 1);

            colJSON = JSON.stringify(col);

            writeFileSync("./col.json", colJSON);
            resolve()
        })
    }
    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        return new Promise((resolve, rejected) => {
            let colJSON = readFileSync("./col.json", "utf-8")

            const col = JSON.parse(colJSON)

            const doc = col.find(condition)

            resolve(doc || null)

        })
    }
}
export default RepoFS
