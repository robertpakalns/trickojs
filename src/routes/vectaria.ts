import { badResponse, fetchData, FetchResult } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const vectariaPlayerTest = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 4, max: 16 })
}

const vectariaPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (vectariaPlayerTest(param)) return badResponse("vectaria", "player")
    return fetchData("vectaria", "player", param)
}

const vectariaServers = (): FetchResult => {
    return fetchData("vectaria", "servers", null)
}

const vectariaServerTest = (id: string): TestResult => {
    const param = id.trim().toUpperCase()
    return testParameterLength(param, { arr: [8] })
}

const vectariaServer = (id: string): FetchResult => {
    const param = id.trim().toUpperCase()
    if (vectariaServerTest(param)) return badResponse("vectaria", "server")
    return fetchData("vectaria", "server", param)
}

export const vectaria = {
    player: (name: string) => vectariaPlayer(name),
    player_test: (name: string) => vectariaPlayerTest(name),
    servers: vectariaServers,
    server: (id: string) => vectariaServer(id),
    server_test: (id: string) => vectariaServerTest(id)
}