import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const vectariaPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (param.length < 4 || param.length > 16) return badResponse("vectaria", "player")
    return fetchData("vectaria", "player", param)
}

const vectariaServers = (): FetchResult => {
    return fetchData("vectaria", "servers", null)
}

const vectariaServer = (id: string): FetchResult => {
    const param = id.trim().toUpperCase()
    if (param.length !== 8) return badResponse("vectaria", "server")
    return fetchData("vectaria", "server", param)
}

export const vectaria = {
    player: (name: string) => vectariaPlayer(name),
    servers: vectariaServers,
    server: (id: string) => vectariaServer(id)
}