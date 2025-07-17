import { badResponse, fetchData, FetchResult, getDataURL } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const player_route = (name: string): string => {
    const param = name.trim()
    return getDataURL("voxiom", "player", param)
}

const player_test = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 3, max: 18 })
}

const player = (name: string): FetchResult => {
    const param = name.trim()
    if (player_test(param)) return badResponse("voxiom", "player")
    return fetchData("voxiom", "player", param)
}

const clan_route = (tag: string): string => {
    const param = tag.trim()
    return getDataURL("voxiom", "clan", param)
}

const clan_test = (tag: string): TestResult => {
    const param = tag.trim()
    return testParameterLength(param, { min: 2, max: 4 })
}

const clan = (tag: string): FetchResult => {
    const param = tag.trim()
    if (clan_test(param)) return badResponse("voxiom", "clan")
    return fetchData("voxiom", "clan", param)
}

const match_br_route = (id: string): string => {
    const param = id.trim()
    return getDataURL("voxiom", "match/br", param)
}

const match_br = (id: string): FetchResult => {
    const param = id.trim()
    return fetchData("voxiom", "match/br", param)
}

const match_ctg_route = (id: string): string => {
    const param = id.trim()
    return getDataURL("voxiom", "match/ctg", param)
}

const match_ctg = (id: string): FetchResult => {
    const param = id.trim()
    return fetchData("voxiom", "match/ctg", param)
}

const skin_route = (id: number): string => {
    return getDataURL("voxiom", "skin", id)
}

const skin_test = (id: number): TestResult => {
    if (!Number.isInteger(id) || id < 1 || id > 531) {
        return {
            error: "ID must an integer between 1 and 531"
        }
    }
    return false
}

const skin = (id: number): FetchResult => {
    if (skin_test(id)) return badResponse("voxiom", "skin")
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

const leaderboard_route = ({ type, range, sort }: LeaderboardParameters): string => {
    const _type = type?.trim().toLowerCase() || ""
    const _range = range?.trim().toLowerCase() || ""
    const _sort = sort?.trim().toLowerCase() || ""

    const params = new URLSearchParams()
    if (_type) params.append("type", _type)
    if (_range) params.append("range", _range)
    if (_sort) params.append("sort", _sort)

    return getDataURL("voxiom", "leaderboard", `?${params.toString()}`)
}

const leaderboard_test = ({ type, range, sort }: LeaderboardParameters): TestResult => {
    const _type = type?.trim().toLowerCase() || ""
    const _range = range?.trim().toLowerCase() || ""
    const _sort = sort?.trim().toLowerCase() || ""

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

const leaderboard = ({ type, range, sort }: LeaderboardParameters): FetchResult => {
    if (leaderboard_test({ type, range, sort })) return badResponse("voxiom", "leaderboard")

    const _type = type?.trim().toLowerCase() || ""
    const _range = range?.trim().toLowerCase() || ""
    const _sort = sort?.trim().toLowerCase() || ""

    const params = new URLSearchParams()
    if (_type) params.append("type", _type)
    if (_range) params.append("range", _range)
    if (_sort) params.append("sort", _sort)

    return fetchData("voxiom", "leaderboard", `?${params.toString()}`)
}

export const voxiom = {
    player,
    player_route,
    player_test,
    clan,
    clan_test,
    clan_route,
    match_br,
    match_br_route,
    match_ctg,
    match_ctg_route,
    skin,
    skin_test,
    skin_route,
    leaderboard,
    leaderboard_test,
    leaderboard_route
}