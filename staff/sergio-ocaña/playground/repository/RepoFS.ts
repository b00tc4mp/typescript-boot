import { readFile, writeFile } from 'fs/promises'

import { Doc, IRepo } from './types.ts';

class RepoFS implements IRepo {
    async insert(doc: Doc): Promise<void> {
        let colJSON = await readFile("./col.json", "utf-8");

        const col = JSON.parse(colJSON);

        col.push(doc);

        colJSON = JSON.stringify(col);

        await writeFile("./col.json", colJSON);

    }

    async deleteById(id: number): Promise<void> {
        let colJSON = await readFile("./col.json", "utf-8");

        const col = JSON.parse(colJSON);

        const index = col.findIndex((doc: Doc) => doc.id === id);

        if (index > -1)
            col.splice(index, 1);

        colJSON = JSON.stringify(col);

        await writeFile("./col.json", colJSON);
    }

    async find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        let colJSON = await readFile("./col.json", "utf-8")

        const col = JSON.parse(colJSON)

        const doc = col.find(condition)

        return doc || null

    }
}
export default RepoFS
