# DnD5e TypeScript APi (server edition)

This repo offers typings and function endpoints to the [DnD 5e API](http://www.dnd5eapi.co/).  It is based on the [dnd5e](https://github.com/SandyGifford/dnd5e) package and can be used with the [dnd5e-client](https://github.com/SandyGifford/dnd5e-client) package.

## installation

### Yarn
```
yarn add dnd5e-client
```

### NPM
```
npm install dnd5e-client
```

## use

After installing you can import normally:

```typescript
import * as DnD from "dnd5e-server";

// -- or --

import {AbilityScore} from "dnd5e-server";
```

### access endpoints directly

From a Node server, you can directly access the DnD 5e API through the `ServerEndpoints` module.

```typescript
import * as DnD from "dnd5e-server";

DnD.ServerEndpoints.skills()
	.then(console.log);
```

Every endpoint in `ServerEndpoints` returns a promise that resolves to a JSON object (typed).  **If you're only intending to access the API directly like this you do not need the middleware or `dnd5e-client` package**  For more information on individual endpoints, see the JSDocs, or the [DnD 5e API docs](http://www.dnd5eapi.co/docs/).

### using the middleware

If you would like to pass the client direct access to the API, use the included Express middleware.

```typescript
import { Server } from "http";
import * as DnD from "dnd5e-server";

const app = express();
const server: Server = require("http").Server(app);

app.use(DnD.middleware);

server.listen(3000);
```

You can now make calls to from the client to `/dnd5e/{endpoint}` (see [DnD 5e API docs](http://www.dnd5eapi.co/docs/) for a full list of endpoints).

```typescript
fetch("/dnd5e/skills")
	.then(console.log);
```

Alternatively, once you have the middleware set up, you can use the [dnd5e-client](https://github.com/SandyGifford/dnd5e-client) package, which comes with all the functions and typings for the client.