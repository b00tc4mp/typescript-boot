import RepoFS from './RepoFS.ts';

const repo = new RepoFS;

// repo.insert({ ida: 1, value: 'hola mundo' });
repo.insert({ id: 2, value: 'hello world' });
// repo.insert({ id: 3, value: 'ciao mondo' });
//repo.insert({ id: 4, value: 'privet mir' });

// repo.deleteById(3);