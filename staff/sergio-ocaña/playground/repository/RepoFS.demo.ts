import RepoFS from './RepoFS.ts';

const repo = new RepoFS;

repo.insert({ id: 1, value: 'hola mundo' })
    .then(() => console.log(repo))
    .then(() => repo.insert({ id: 2, value: 'hello world' }))
    .then(() => console.log(repo))
    .then(() => repo.insert({ id: 3, value: 'ciao mondo' }))
    .then(() => console.log(repo))
    .then(() => repo.deleteById(2))
    .then(() => console.log(repo))
    .catch(error => console.error(error))