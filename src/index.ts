import { cryzen } from "./routes/cryzen"
import { kirka } from "./routes/kirka"
import { vectaria } from "./routes/vectaria"
import { voxiom } from "./routes/voxiom"

import { setLog as setGlobalLog } from "./utils/fetchData"

class TrickoAPI {

    public setLog(log: string) {
        setGlobalLog(log)
    }

    public cryzen = {
        getPlayer: cryzen.player,
        testPlayer: cryzen.player_test,
        getPlayerRoute: cryzen.player_route,
        getLeaderboard: cryzen.leaderboard,
        testLeaderboard: cryzen.leaderboard_test,
        getLeaderboardRoute: cryzen.leaderboard_route
    }

    public kirka = {
        getPlayer: kirka.player,
        testPlayer: kirka.player_test,
        getPlayerRoute: kirka.player_route,
        getClan: kirka.clan,
        testClan: kirka.clan_test,
        getClanRoute: kirka.clan_route,
        getPlayerLeaderboard: kirka.leaderboard_players,
        getPlayerLeaderboardRoute: kirka.leaderboard_players_route,
        getClanLeaderboard: kirka.leaderboard_clans,
        getClanLeaderboardRoute: kirka.leaderboard_clans_route,
        getMarket: kirka.market,
        getMarketRoute: kirka.market_route
    }

    public vectaria = {
        getPlayer: vectaria.player,
        testPlayer: vectaria.player_test,
        getPlayerRoute: vectaria.player_route,
        getServers: vectaria.servers,
        getServersRoute: vectaria.servers_route,
        getServer: vectaria.server,
        testServer: vectaria.server_test,
        getServerRoute: vectaria.server_route
    }

    public voxiom = {
        getPlayer: voxiom.player,
        testPlayer: voxiom.player_test,
        getClan: voxiom.clan,
        testClan: voxiom.clan_test,
        getMatchBR: voxiom.match_br,
        getMatchCTG: voxiom.match_ctg,
        getSkin: voxiom.skin,
        testSkin: voxiom.skin_test,
        getLeaderboard: voxiom.leaderboard,
        testLeaderboard: voxiom.leaderboard_test
    }
}

export default TrickoAPI