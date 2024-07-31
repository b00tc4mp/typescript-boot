export type Doc = {
    id: number,
    value: any
}

export interface IRepo {
    insert(doc: Doc): void
    deleteById(id: number): void
    find(condition: (value: Doc, index: number, col: Doc[]) => boolean): null | Doc
}