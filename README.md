![Version](https://img.shields.io/npm/v/trickojs)
![License](https://img.shields.io/github/license/robertpakalns/redline-client)
![GitHub stars](https://img.shields.io/github/stars/robertpakalns/redline-client)
![GitHub forks](https://img.shields.io/github/forks/robertpakalns/redline-client)
![GitHub last commit](https://img.shields.io/github/last-commit/robertpakalns/redline-client)
![Languages](https://img.shields.io/github/languages/top/robertpakalns/redline-client)

# trickojs
An npm package for validating parameters and sending requests to [`api.tricko.pro`](https://api.tricko.pro), the backend for [Tricko.pro](https://tricko.pro) and [Tricko Bot](https://discord.com/oauth2/authorize?client_id=1182411176517324840).

## Build locally
```bash
npm i -g bun  # Install Bun if not already installed
bun run dev   # Run tests from src/tests.ts
```

## Usage
```bash
npm i trickojs
```

```js
import TrickoAPI from "trickojs"

const api = new TrickoAPI

api.setLog("custom-log") // Optional: set a log label for requests to api.tricko.pro
api.setAuthorization("BOT <token>") // Optional: set Authorization header for a request

// Example methods (see more in src/index.ts and src/tests.ts)
const data = await api.cryzen.getPlayer("TheMasterRob4ig")  // Get player data (returns JSON)
const test = api.cryzen.testPlayer("TheMasterRob4ig")       // Validate player username
const route = api.cryzen.getPlayerRoute("TheMasterRob4ig")  // Get the API route for the player

// Similar structure for:
// - api.cryzen (other methods)
// - api.kirka
// - api.vectaria
// - api.voxiom
```

by robertpakalns