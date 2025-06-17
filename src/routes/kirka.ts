import { badResponse, fetchData, FetchResult } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const kirkaPlayerTest = (id: string): TestResult => {
    const param = id.trim().replace("#", "")
    return testParameterLength(param, { arr: [6, 28, 36] })
}

const kirkaPlayer = (id: string): FetchResult => {
    const param = id.trim().replace("#", "")
    if (kirkaPlayerTest(param)) return badResponse("kirka", "player")
    return fetchData("kirka", "player", param.length === 6 ? param.toUpperCase() : param)
}

const kirkaClanTest = (name: string): TestResult => {
    const param = name.trim()
    return name !== "aim" && testParameterLength(param, { min: 4, max: 10 })
}

const kirkaClan = (name: string): FetchResult => {
    const param = name.trim()
    if (kirkaClanTest(param)) return badResponse("kirka", "clan")
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
    player_test: (id: string) => kirkaPlayerTest(id),
    clan: (name: string) => kirkaClan(name),
    clan_test: (name: string) => kirkaClanTest(name),
    leaderboard_players: kirkaPlayerLeaderboard,
    leaderboard_clans: kirkaClanLeaderboard,
    market: kirkaMarket
}

// https://github.com/SheriffCarry/kirkajs
// https://kirka.irrvlo.xyz