import { voxiom } from "./routes/voxiom"

export class TrickoAPI {
    public voxiom = {
        getPlayer: (name: string) => voxiom.player(name),
        getClan: (name: string) => voxiom.clan(name)
    }
}