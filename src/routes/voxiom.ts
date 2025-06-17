import { badResponse, fetchData, FetchResult } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const voxiomPlayerTest = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 3, max: 18 })
}

const voxiomPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (voxiomPlayerTest(param)) return badResponse("voxiom", "player")
    return fetchData("voxiom", "player", param)
}

const voxiomClanTest = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 2, max: 4 })
}

const voxiomClan = (name: string): FetchResult => {
    const param = name.trim()
    if (voxiomClanTest(param)) return badResponse("voxiom", "clan")
    return fetchData("voxiom", "clan", param)
}

const voxiomMatchBR = (id: string): FetchResult => {
    const param = id.trim()
    return fetchData("voxiom", "match/br", param)
}
const voxiomMatchCTG = (id: string): FetchResult => {
    const param = id.trim()
    return fetchData("voxiom", "match/ctg", param)
}

const voxiomSkinTest = (id: number): TestResult => {
    if (!Number.isInteger(id) || id < 1 || id > 531) {
        return {
            error: "ID must an integer between 1 and 531"
        }
    }
    return false
}

const voxiomSkin = (id: number): FetchResult => {
    if (voxiomSkinTest(id)) return badResponse("voxiom", "skin")
    return fetchData("voxiom", "market/skin", id)
}

const ranges = ["day", "week", "all"]
const sorts = {
    all: ["score", "level"],
    ctg: ["total_score", "total_games_won", "total_kills", "total_captures"],
    br: ["total_score", "total_games_won", "total_kills", "total_survival_time"],
    clan: ["total_score", "total_games_won", "total_kills", "total_power"]
}



export type LeaderboardParameters = { type: string; range: string; sort: string }

const voxiomLeaderboardTest = ({ type, range, sort }: LeaderboardParameters): TestResult => {
    const _type = type.trim().toLowerCase()
    const _range = range.trim().toLowerCase()
    const _sort = sort.trim().toLowerCase()

    const params = new URLSearchParams()
    if (_type && !["all", "clan"].includes(_type)) params.append("type", _type)
    if (_range) params.append("range", _range)
    if (_sort) params.append("sort", _sort)


    const typeKey = _type === "clan" ? "clan" : (_type || "all")
    const validSorts = sorts[typeKey as keyof typeof sorts]

    if (
        validSorts &&
        (typeKey === "all" || ranges.includes(params.get("range") || "")) &&
        validSorts.includes(params.get("sort") || "")
    ) return false

    return {
        error: "Invalid parameters"
    }
}

const voxiomLeaderboard = ({ type, range, sort }: LeaderboardParameters): FetchResult => {
    const _type = type.trim().toLowerCase()
    const _range = range.trim().toLowerCase()
    const _sort = sort.trim().toLowerCase()

    if (voxiomLeaderboardTest({ type, range, sort })) return badResponse("voxiom", "leaderboard")

    const params = new URLSearchParams()
    if (_type && !["all", "clan"].includes(_type)) params.append("type", _type)
    if (_range) params.append("range", _range)
    if (_sort) params.append("sort", _sort)

    return fetchData("voxiom", "leaderboard", `?${params.toString()}`)
}

export const voxiom = {
    player: (name: string) => voxiomPlayer(name),
    player_test: (name: string) => voxiomPlayerTest(name),
    clan: (name: string) => voxiomClan(name),
    clan_test: (name: string) => voxiomClanTest(name),
    match_br: (id: string) => voxiomMatchBR(id),
    match_ctg: (id: string) => voxiomMatchCTG(id),
    skin: (id: number) => voxiomSkin(id),
    skin_test: (id: number) => voxiomSkinTest(id),
    leaderboard: (params: LeaderboardParameters) => voxiomLeaderboard(params),
    leaderboard_test: (params: LeaderboardParameters) => voxiomLeaderboardTest(params)
}