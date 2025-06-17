import { badResponse, fetchData, FetchResult } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const vectariaPlayerTest = (name: string): TestResult => {
    return testParameterLength(name, { min: 4, max: 16 })
}

const vectariaPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (vectariaPlayerTest(param)) return badResponse("vectaria", "player")
    return fetchData("vectaria", "player", param)
}

const vectariaServers = (): FetchResult => {
    return fetchData("vectaria", "servers", null)
}

const vectariaServerTest = (name: string): TestResult => {
    return testParameterLength(name, { arr: [8] })
}

const vectariaServer = (id: string): FetchResult => {
    const param = id.trim().toUpperCase()
    if (param.length !== 8) return badResponse("vectaria", "server")
    return fetchData("vectaria", "server", param)
}

export const vectaria = {
    player: (name: string) => vectariaPlayer(name),
    player_test: (name: string) => vectariaPlayerTest(name),
    servers: vectariaServers,
    server: (id: string) => vectariaServer(id),
    server_test: (id: string) => vectariaServerTest(id)
}