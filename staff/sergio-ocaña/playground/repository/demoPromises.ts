import RepoM from "./RepoM.ts";
import RepoFS from "./RepoFS.ts";
import { IRepo } from "./types.ts";
import RepoDB from "./RepoDB.ts";

const repoM = new RepoM
const repoFS = new RepoFS
const repoDB = new RepoDB

let repo: IRepo

repo = repoM
repo.insert({ id: 1, value: 'hola mundo' })
    .then(() => console.log(repo))
    .then(() => repo.insert({ id: 2, value: 'hello world' }))
    .then(() => console.log(repo))
    .then(() => repo.insert({ id: 3, value: 'ciao mondo' }))
    .then(() => console.log(repo))
    .then(() => repo.deleteById(2))
    .then(() => console.log(repo))
    .catch(error => console.error(error))
    .finally(() => {
        repo = repoFS

        return repo.insert({ id: 1, value: 'hola mundo' })
            .then(() => repo.insert({ id: 2, value: 'hello world' }))
            .then(() => repo.insert({ id: 3, value: 'ciao mondo' }))
            .then(() => repo.deleteById(2))
            .catch(error => console.error(error))
    })
    .then(() => repoDB.connect())
    .then(() => {
        repo = repoDB

        return repo.insert({ id: 1, value: 'hola mundo' })
            .then(() => repo.insert({ id: 2, value: 'hello world' }))
            .then(() => repo.insert({ id: 3, value: 'ciao mondo' }))
            .then(() => repo.deleteById(2))
            .catch(error => console.error(error))
    })
    .then(() => repoDB.disconnect())
    .then(() => console.log('end'))