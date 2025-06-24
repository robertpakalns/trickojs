import { cryzen } from "./routes/cryzen"
import { kirka } from "./routes/kirka"
import { vectaria } from "./routes/vectaria"
import { voxiom, LeaderboardParameters } from "./routes/voxiom"

import { setLog as setGlobalLog } from "./utils/fetchData"

class TrickoAPI {

    public setLog(log: string) {
        setGlobalLog(log)
    }

    public cryzen = {
        getPlayer: (name: string) => cryzen.player(name),
        testPlayer: (name: string) => cryzen.player_test(name),
        getPlayerRoute: (name: string) => cryzen.player_route(name),
        getLeaderboard: (type: string) => cryzen.leaderboard(type),
        testLeaderboard: (type: string) => cryzen.leaderboard_test(type),
        getLeaderboardRoute: (type: string) => cryzen.leaderboard_route(type),
    }

    public kirka = {
        getPlayer: (id: string) => kirka.player(id),
        testPlayer: (id: string) => kirka.player_test(id),
        getClan: (name: string) => kirka.clan(name),
        testClan: (name: string) => kirka.clan_test(name),
        getPlayerLeaderboard: kirka.leaderboard_players,
        getClanLeaderboard: kirka.leaderboard_clans,
        getMarket: kirka.market
    }

    public vectaria = {
        getPlayer: (name: string) => vectaria.player(name),
        testPlayer: (name: string) => vectaria.player_test(name),
        getPlayerRoute: (name: string) => vectaria.player_route(name),
        getServers: vectaria.servers,
        getServersRoute: vectaria.servers_route,
        getServer: (id: string) => vectaria.server(id),
        testServer: (id: string) => vectaria.server_test(id),
        getServerRoute: (id: string) => vectaria.server_route(id)
    }

    public voxiom = {
        getPlayer: (name: string) => voxiom.player(name),
        testPlayer: (name: string) => voxiom.player_test(name),
        getClan: (name: string) => voxiom.clan(name),
        testClan: (name: string) => voxiom.clan_test(name),
        getMatchBR: (id: string) => voxiom.match_br(id),
        getMatchCTG: (id: string) => voxiom.match_ctg(id),
        getSkin: (id: number) => voxiom.skin(id),
        testSkin: (id: number) => voxiom.skin_test(id),
        getLeaderboard: (params: LeaderboardParameters) => voxiom.leaderboard(params),
        testLeaderboard: (params: LeaderboardParameters) => voxiom.leaderboard_test(params)
    }
}

export default TrickoAPI