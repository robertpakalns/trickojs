import { badResponse, fetchData, FetchResult } from "../utils/fetchData"

const voxiomPlayer = (name: string): FetchResult => {
    if (name.length < 3 || name.length > 18) return badResponse("voxiom", "player")
    return fetchData("voxiom", "player", name)
}

const voxiomClan = (name: string): FetchResult => {
    if (name.length < 2 || name.length > 4) return badResponse("voxiom", "clan")
    return fetchData("voxiom", "clan", name)
}

export const voxiom = {
    player: (name: string) => voxiomPlayer(name),
    clan: (name: string) => voxiomClan(name),
}