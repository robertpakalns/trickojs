import { badResponse, fetchData, FetchResult, getDataURL } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const player_route = (id: string): string => {
    const param = id.trim().replace("#", "")
    return getDataURL("kirka", "player", param)
}

const player_test = (id: string): TestResult => {
    const param = id.trim().replace("#", "")
    return testParameterLength(param, { arr: [6, 28, 36] })
}

const player = (id: string): FetchResult => {
    const param = id.trim().replace("#", "")
    if (player_test(param)) return badResponse("kirka", "player")
    return fetchData("kirka", "player", param.length === 6 ? param.toUpperCase() : param)
}

const clan_route = (name: string): string => {
    const param = name.trim()
    return getDataURL("kirka", "clan", param)
}

const clan_test = (name: string): TestResult => {
    const param = name.trim()
    return name !== "aim" && testParameterLength(param, { min: 4, max: 10 })
}

const clan = (name: string): FetchResult => {
    const param = name.trim()
    if (clan_test(param)) return badResponse("kirka", "clan")
    return fetchData("kirka", "clan", param)
}

const leaderboard_players_route = (): string => {
    return getDataURL("kirka", "leaderboard", "players")
}

const leaderboard_players = (): FetchResult => {
    return fetchData("kirka", "leaderboard", "players")
}

const leaderboard_clans_route = (): string => {
    return getDataURL("kirka", "leaderboard", "clans")
}

const leaderboard_clans = (): FetchResult => {
    return fetchData("kirka", "leaderboard", "clans")
}

const market_route = (): string => {
    return getDataURL("kirka", "market", null)
}

const market = (): FetchResult => {
    return fetchData("kirka", "market", null)
}

export const kirka = {
    player,
    player_test,
    player_route,
    clan,
    clan_test,
    clan_route,
    leaderboard_players,
    leaderboard_players_route,
    leaderboard_clans,
    leaderboard_clans_route,
    market,
    market_route
}

// https://github.com/SheriffCarry/kirkajs
// https://kirka.irrvlo.xyz