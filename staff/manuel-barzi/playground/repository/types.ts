export type Doc = {
    id: number,
    value: any
}

export interface IRepo {
    insert(doc: Doc): Promise<void>
    deleteById(id: number): Promise<void>
    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): Promise<null | Doc>
}