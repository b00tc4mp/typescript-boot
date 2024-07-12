import RepoM from "./RepoM.ts";

const repo = new RepoM;

console.log(repo);

repo.insert({ id: 1, value: "uno" });

console.log(repo);

repo.insert({ id: 2, value: "dos" });

console.log(repo);

repo.insert({ id: 3, value: "tres" });

console.log(repo);

repo.deleteById(2);

console.log(repo);