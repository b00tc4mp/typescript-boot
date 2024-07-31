import { Doc, IRepo } from "./types"

class Logic {
    repo: IRepo

    constructor(repo: IRepo) {
        this.repo = repo
    }

    registerUser(username: string, password: string) {
        if (typeof username !== 'string') throw new TypeError('username is not a string')
        if (typeof password !== 'string') throw new TypeError('password is not a string')

        let doc: Doc

        doc = this.repo.find((doc: Doc) => doc.value.username === username)

        if (doc) throw new Error('user already exists')

        doc = { id: Date.now(), value: { username, password } }

        this.repo.insert(doc)
    }
}

export default Logic