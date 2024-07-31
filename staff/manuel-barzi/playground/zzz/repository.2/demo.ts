import RepoM from "./RepoM";
import RepoFS from "./RepoFS";

const repoM = new RepoM
const repoFS = new RepoFS

const adrianDoc = { id: 10, value: "Super Adrián" }
const maiteDoc = { id: 11, value: "Super Maite" }

repoM.insert(adrianDoc)
repoM.insert(maiteDoc)

console.log(repoM)

repoFS.insert(adrianDoc)
repoFS.insert(maiteDoc)