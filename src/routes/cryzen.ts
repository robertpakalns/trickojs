import { badResponse, fetchData, FetchResult, getDataURL } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const player_route = (name: string): string => {
    const param = name.trim()
    return getDataURL("cryzen", "player", param)
}

const player_test = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 4, max: 16, arr: [36] })
}

const player = (name: string): FetchResult => {
    const param = name.trim()
    if (player_test(param)) return badResponse("cryzen", "player")
    return fetchData("cryzen", "player", param)
}

const leaderboard_route = (type: string): string => {
    const param = type.trim().toLowerCase()
    return getDataURL("cryzen", "leaderboard", param)
}

const cryzenLeaderboardTypes = ["scores", "kills", "wins", "lvl"]

const leaderboard_test = (type: string): TestResult => {
    const param = type.trim().toLowerCase()
    if (cryzenLeaderboardTypes.includes(param)) {
        return false
    }
    return {
        error: "Invalid parameter. Must be 'scores', 'kills', 'wins', or 'lvl'."
    }
}

const leaderboard = (type: string): FetchResult => {
    const param = type.trim().toLowerCase()
    if (leaderboard_test(param)) return badResponse("cryzen", "leaderboard")
    return fetchData("cryzen", "leaderboard", param)
}

export const cryzen = {
    player,
    player_test,
    player_route,
    leaderboard,
    leaderboard_test,
    leaderboard_route
}