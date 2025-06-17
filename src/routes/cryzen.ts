import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const cryzenPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (param.length < 4 || (param.length > 16 && param.length !== 36)) return badResponse("cryzen", "player")
    return fetchData("cryzen", "player", param)
}

export type CryzenLeaderboard = "scores" | "kills" | "wins" | "lvl"
const cryzenLeaderboard = (type: CryzenLeaderboard): FetchResult => {
    return fetchData("cryzen", "leaderboard", type)
}

export const cryzen = {
    player: (name: string) => cryzenPlayer(name),
    leaderboard: (type: CryzenLeaderboard) => cryzenLeaderboard(type)
}