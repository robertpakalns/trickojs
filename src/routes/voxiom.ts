import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const voxiomPlayer = (name: string): FetchResult => {
    if (name.length < 3 || name.length > 18) return badResponse("voxiom", "player")
    return fetchData("voxiom", "player", name)
}

const voxiomClan = (name: string): FetchResult => {
    if (name.length < 2 || name.length > 4) return badResponse("voxiom", "clan")
    return fetchData("voxiom", "clan", name)
}

const voxiomMatchBR = (id: string): FetchResult => {
    return fetchData("voxiom", "match/br", id)
}
const voxiomMatchCTG = (id: string): FetchResult => {
    return fetchData("voxiom", "match/ctg", id)
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

type LeaderboardParameters = { type: string; range: string; sort: string }
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
    ) return badResponse("voxiom", "leaderboard")

    return fetchData("voxiom", "leaderboard", `?${params.toString()}`)
}

export const voxiom = {
    player: (name: string) => voxiomPlayer(name),
    clan: (name: string) => voxiomClan(name),
    match_br: (id: string) => voxiomMatchBR(id),
    match_ctg: (id: string) => voxiomMatchCTG(id),
    skin: (id: number) => voxiomSkin(id),
    leaderboard: voxiomLeaderboard
}