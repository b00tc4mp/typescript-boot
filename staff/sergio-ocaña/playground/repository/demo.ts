import RepoM from "./RepoM.ts";
import RepoFS from "./RepoFS.ts";
import { IRepo } from "./types.ts";
import RepoDB from "./RepoDB.ts";

const repoM = new RepoM
const repoFS = new RepoFS
const repoDB = new RepoDB

let repo: IRepo

const main = async () => {
    try {
        repo = repoM

        await repo.insert({ id: 1, value: 'hola mundo' })
        console.log(repo)

        await repo.insert({ id: 2, value: 'hello world' })
        console.log(repo)

        await repo.insert({ id: 3, value: 'ciao mondo' })
        console.log(repo)

        await repo.deleteById(2)
        console.log(repo)

    } catch (error) {
        console.error(error)
    } finally {
        try {
            repo = repoFS

            await repo.insert({ id: 1, value: 'hola mundo' })
            await repo.insert({ id: 2, value: 'hello world' })
            await repo.insert({ id: 3, value: 'ciao mondo' })

            await repo.deleteById(2)

        } catch (error) {
            console.error(error)

        } finally {
            try {
                repo = repoDB

                await repo.insert({ id: 1, value: 'hola mundo' })
                await repo.insert({ id: 2, value: 'hello world' })
                await repo.insert({ id: 3, value: 'ciao mondo' })

                await repo.deleteById(2)

            } catch (error) {
                console.error(error)
            } finally {
                await repo.disconnect() //¿importar indiviualmente repoDB?
            }
        }
    }
}
main()