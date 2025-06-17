import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const voxiomPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (param.length < 3 || param.length > 18) return badResponse("voxiom", "player")
    return fetchData("voxiom", "player", param)
}

const voxiomClan = (name: string): FetchResult => {
    const param = name.trim()
    if (param.length < 2 || param.length > 4) return badResponse("voxiom", "clan")
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

const voxiomSkin = (id: number): FetchResult => {
    if (id < 1 || id > 531) return badResponse("voxiom", "skin")
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
const voxiomLeaderboard = ({ type, range, sort }: LeaderboardParameters): FetchResult => {
    const _type = type.trim().toLowerCase()
    const _range = range.trim().toLowerCase()
    const _sort = sort.trim().toLowerCase()

    const typeKey = _type === "clan" ? "clan" : (_type || "all")
    const validSorts = sorts[typeKey as keyof typeof sorts]

    const params = new URLSearchParams()
    if (_type && !["all", "clan"].includes(_type)) params.append("type", _type)
    if (_range) params.append("range", _range)
    if (_sort) params.append("sort", _sort)

    if (
        validSorts &&
        (typeKey === "all" || ranges.includes(params.get("range") || "")) &&
        validSorts.includes(params.get("sort") || "")
    ) return fetchData("voxiom", "leaderboard", `?${params.toString()}`)

    return badResponse("voxiom", "leaderboard")
}

export const voxiom = {
    player: (name: string) => voxiomPlayer(name),
    clan: (name: string) => voxiomClan(name),
    match_br: (id: string) => voxiomMatchBR(id),
    match_ctg: (id: string) => voxiomMatchCTG(id),
    skin: (id: number) => voxiomSkin(id),
    leaderboard: (params: LeaderboardParameters) => voxiomLeaderboard(params)
}