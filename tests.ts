import TrickoAPI from "./src/index"

// Test
const main = async () => {
    const api = new TrickoAPI

    // kirka

    // player
    // const data = await api.kirka.getPlayer("gytdag")
    // clan
    // const data = await api.kirka.getClan("aib")
    // player leaderboard
    // const data = await api.kirka.getPlayerLeaderboard()
    // clan leaderboard
    // const data = await api.kirka.getClanLeaderboard()
    // market
    const data = await api.kirka.getMarket()

    // vectaria

    // player
    // const data = await api.vectaria.getPlayer("Rob4ig")
    // servers
    // const data = await api.vectaria.getServers()
    // server
    // const data = await api.vectaria.getServer("I1O32x7l")

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
    // const data = await api.voxiom.getLeaderboard({ type: "ctg", range: "week", sort: "total_score" })

    console.log(data)
}

main()