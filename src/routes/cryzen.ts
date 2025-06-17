import { badResponse, fetchData, FetchResult } from "../utils/fetchData"
import { TestResult, testParameterLength } from "../utils/testParameter"

const cryzenPlayerTest = (name: string): TestResult => {
    const param = name.trim()
    return testParameterLength(param, { min: 4, max: 16, arr: [36] })
}

const cryzenPlayer = (name: string): FetchResult => {
    const param = name.trim()
    if (cryzenPlayerTest(param)) return badResponse("cryzen", "player")
    return fetchData("cryzen", "player", param)
}

const cryzenLeaderboardTypes = ["scores", "kills", "wins", "lvl"]

const cryzenLeaderboardTest = (type: string): TestResult => {
    const param = type.trim().toLowerCase()
    if (cryzenLeaderboardTypes.includes(param)) {
        return false
    }
    return {
        error: "Invalid parameter. Must be 'scores', 'kills', 'wins', or 'lvl'."
    }
}

const cryzenLeaderboard = (type: string): FetchResult => {
    const param = type.trim().toLowerCase()
    if (cryzenLeaderboardTest(param)) return badResponse("cryzen", "leaderboard")
    return fetchData("cryzen", "leaderboard", param)
}

export const cryzen = {
    player: (name: string) => cryzenPlayer(name),
    player_test: (name: string) => cryzenPlayerTest(name),
    leaderboard: (type: string) => cryzenLeaderboard(type),
    leaderboard_test: (type: string) => cryzenLeaderboardTest(type)
}