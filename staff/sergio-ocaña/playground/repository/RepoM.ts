import { Doc, IRepo } from "./types.ts";

class RepoM implements IRepo {
    col: Doc[] = [];

    insert(doc: Doc): Promise<void> {
        return new Promise((resolve, reject) => {
            this.col.push(doc);

            resolve()
        })
    }

    deleteById(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this.col.findIndex((doc: Doc) => doc.id === id)

            if (index > -1)
                this.col.splice(index, 1);

            resolve();
        })
    }

    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        return new Promise((resolve, reject) => {
            const doc = this.col.find(condition);

            resolve(doc || null);
        })
    }
}
export default RepoM;