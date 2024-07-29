import { Doc, IRepo } from "./types.ts";

class RepoM implements IRepo {
    col: Doc[] = [];

    async insert(doc: Doc): Promise<void> {
        this.col.push(doc);
    }

    async deleteById(id: number): Promise<void> {
        const index = this.col.findIndex((doc: Doc) => doc.id === id)

        if (index > -1)
            this.col.splice(index, 1);
    }

    async find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc> {
        const doc = this.col.find(condition);

        return (doc || null);
    }
}
export default RepoM;