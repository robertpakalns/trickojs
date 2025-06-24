import { badResponse, fetchData, FetchResult, getDataURL } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const player_route = (name: string): string => {
    const param = name.trim()
    return getDataURL("vectaria", "player", param)
}

const player_test = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 4, max: 16 })
}

const player = (name: string): FetchResult => {
    const param = name.trim()
    if (player_test(param)) return badResponse("vectaria", "player")
    return fetchData("vectaria", "player", param)
}

const servers_route = (): string => {
    return getDataURL("vectaria", "servers", null)
}

const servers = (): FetchResult => {
    return fetchData("vectaria", "servers", null)
}

const server_route = (id: string): string => {
    const param = id.trim().toUpperCase()
    return getDataURL("vectaria", "server", param)
}

const server_test = (id: string): TestResult => {
    const param = id.trim().toUpperCase()
    return testParameterLength(param, { arr: [8] })
}

const server = (id: string): FetchResult => {
    const param = id.trim().toUpperCase()
    if (server_test(param)) return badResponse("vectaria", "server")
    return fetchData("vectaria", "server", param)
}

export const vectaria = {
    player,
    player_test,
    player_route,
    servers,
    servers_route,
    server,
    server_test,
    server_route
}