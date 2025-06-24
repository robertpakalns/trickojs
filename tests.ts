import TrickoAPI from "./src/index"

const main = async () => {
    const api = new TrickoAPI

    // Set log identifier
    api.setLog("buba")

    // Cryzen

    // Player
    // const data = await api.cryzen.getPlayer("4ca11352-cdfe-4d64-bed6-d840d1558651")
    // const test = api.cryzen.testPlayer("4ca11352-cdfe-4d64-bed6-d840d1558651")
    // const route = api.cryzen.getPlayerRoute("user#tricko")
    // Leaderboard
    // const data = await api.cryzen.getLeaderboard("lvl")
    // const test = api.cryzen.testLeaderboard("lbvl")
    // const route = api.cryzen.getLeaderboardRoute("             kills              ")

    // Kirka

    // Player
    // const data = await api.kirka.getPlayer("gytdag")
    // const test = api.kirka.testPlayer("gytda")
    // const route = api.kirka.getPlayerRoute("sniper")
    // Clan
    // const data = await api.kirka.getClan("aib")
    // const test = api.kirka.testClan("aiegtmmgkkk")
    // const route = api.kirka.getClanRoute("prog")
    // Player leaderboard
    // const data = await api.kirka.getPlayerLeaderboard()
    // const route = api.kirka.getPlayerLeaderboardRoute()
    // Clan leaderboard
    // const data = await api.kirka.getClanLeaderboard()
    // const route = api.kirka.getClanLeaderboardRoute()
    // Market
    // const data = await api.kirka.getMarket()
    const route = api.kirka.getMarketRoute()

    // Vectaria

    // Player
    // const data = await api.vectaria.getPlayer("Rob4ig")
    // const test = api.vectaria.testPlayer("Rodg")
    // const route = api.vectaria.getPlayerRoute("Rob5ig")
    // Servers
    // const data = await api.vectaria.getServers()
    // const route = api.vectaria.getServersRoute()
    // Server
    // const data = await api.vectaria.getServer("I1O32x7l")
    // const test = api.vectaria.testServer("I1O32x7l")
    // const route = api.vectaria.getServerRoute("I1O32x7l         ")

    // Voxiom

    // Player
    // const data = await api.voxiom.getPlayer("acb")
    // const test = api.voxiom.testPlayer("12")
    // Clan
    // const data = await api.voxiom.getClan("iv")
    // const test = api.voxiom.testClan("12")
    // BR match
    // const data = await api.voxiom.getMatchBR("1df39bf7-8e53-46fa-b1ab-f2ea8598f181")
    // CTG match
    // const data = await api.voxiom.getMatchCTG("7b9f1e10-f471-4a71-aade-b4927f26d854")
    // Market skin
    // const data = await api.voxiom.getSkin(101011010)
    // const test = api.voxiom.testSkin(12)
    // Leaderboard
    // const data = await api.voxiom.getLeaderboard({ type: "ctg", range: "week", sort: "total_score" })
    // const test = api.voxiom.testLeaderboard({ type: "ctg", range: "week", sort: "total_score" })

    // console.log(data)
    // console.log(test)
    console.log(route)
}

main()