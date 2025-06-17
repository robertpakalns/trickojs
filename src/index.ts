import { cryzen, CryzenLeaderboard } from "./routes/cryzen"
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
        getLeaderboard: (type: CryzenLeaderboard) => cryzen.leaderboard(type)
    }

    public kirka = {
        getPlayer: (id: string) => kirka.player(id),
        getClan: (name: string) => kirka.clan(name),
        getPlayerLeaderboard: kirka.leaderboard_players,
        getClanLeaderboard: kirka.leaderboard_clans,
        getMarket: kirka.market
    }

    public vectaria = {
        getPlayer: (name: string) => vectaria.player(name),
        getServers: vectaria.servers,
        getServer: (id: string) => vectaria.server(id)
    }

    public voxiom = {
        getPlayer: (name: string) => voxiom.player(name),
        getClan: (name: string) => voxiom.clan(name),
        getMatchBR: (id: string) => voxiom.match_br(id),
        getMatchCTG: (id: string) => voxiom.match_ctg(id),
        getSkin: (id: number) => voxiom.skin(id),
        getLeaderboard: (params: LeaderboardParameters) => voxiom.leaderboard(params)
    }
}

export default TrickoAPI