import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const kirkaPlayer = (id: string): FetchResult => {
    const param = id.trim().replace("#", "")
    const len = param.length
    if (len !== 6 && len !== 28 && len !== 36) return badResponse("kirka", "player")
    return fetchData("kirka", "player", len === 6 ? param.toUpperCase() : param)
}

const kirkaClan = (name: string): FetchResult => {
    const param = name.trim()
    if (name !== "aim" && (name.length < 4 || name.length > 10)) return badResponse("kirka", "clan")
    return fetchData("kirka", "clan", param)
}

const kirkaPlayerLeaderboard = (): FetchResult => {
    return fetchData("kirka", "leaderboard", "players")
}
const kirkaClanLeaderboard = (): FetchResult => {
    return fetchData("kirka", "leaderboard", "clans")
}

const kirkaMarket = (): FetchResult => {
    return fetchData("kirka", "market", null)
}

export const kirka = {
    player: (id: string) => kirkaPlayer(id),
    clan: (name: string) => kirkaClan(name),
    leaderboard_players: kirkaPlayerLeaderboard,
    leaderboard_clans: kirkaClanLeaderboard,
    market: kirkaMarket
}

// https://github.com/SheriffCarry/kirkajs
// https://kirka.irrvlo.xyz