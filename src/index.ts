import { voxiom } from "./routes/voxiom"

export class TrickoAPI {
    public voxiom = {
        getPlayer: (name: string) => voxiom.player(name),
        getClan: (name: string) => voxiom.clan(name),
        getMatchBR: (id: string) => voxiom.match_br(id),
        getMatchCTG: (id: string) => voxiom.match_ctg(id),
        getSkin: (id: number) => voxiom.skin(id),
        getLeaderboard: voxiom.leaderboard
    }
}


// Test
const main = async () => {
    const api = new TrickoAPI

    // voxiom

    // player
    // const data = await api.voxiom.getPlayer("acb")
    // clan
    // const data = await api.voxiom.getClan("iv")
    // br match
    // const data = await api.voxiom.getMatchBR("1df39bf7-8e53-46fa-b1ab-f2ea8598f181")
    // br match
    // const data = await api.voxiom.getMatchCTG("7b9f1e10-f471-4a71-aade-b4927f26d854")
    // skin
    // const data = await api.voxiom.getSkin(101011010)
    // leaderboard
    const data = await api.voxiom.getLeaderboard({
        type: "ctg",
        range: "week",
        sort: "total_score"
    })

    console.log(data)
}

main()