## FiveM Status
API for getting FiveM server info & status now using node-fetch module.

## Installation
```
npm install fivem-status
npm i fivem-status
```

## Usage
**Examples**

See the server status (json)
```js
const FiveM = require('fivem-status'); //Import the module
const server = new FiveM.Status('IPAddress:PORT'); //Set the server's IP Address and Port

server.getServerStatus().then(data => console.log(data)); //Get & log the Server Status!

//if online returns json {online: true}
// if offline returns json {online: false}
```

Get Player Count (in numbers)
```js
const FiveM = require('fivem-status'); //Import the module
const server = new FiveM.Status('IPAddress:PORT'); //Set the server's IP Address and Port
 
server.getPlayers().then(data => console.log(data)) // Get & log the number of players online in the server!
```

Get all Resources
```js
const FiveM = require('fivem-status'); //Import the module
const server = new FiveM.Status('IPAddress:PORT'); //Set the server's IP Address and Port
 
server.getResources().then(data => console.log(data)) // Get & Log the resources of server!
```


## **ALL FUNCTION REQUESTS**
```
- getPlayers - Number of players online - (number)
- getPlayersAll - List all players in an array - (string)
- getMaxPlayers - Max players that are able to join the server - (number)
- getResources - Get resource names of all server resources - (string/array)
- getTags - Get all server tags - (string)
- getServer - Get the whole server object - (string)
- getOnesync - See if the server has OneSync enabled - (boolean)
- getLocale - The language of the server - (string)
- getGamename - Get the name of the server - (string)
- getEnhancedHostSupport - ... - (boolean)
- getlicenseKeyToken - The license key for the server - (string)
- getScriptHookAllowed - See if the server supports external mod menus from the client - (boolean)
- getBannerConnecting - Get the banner_connecting of the server - (string)
- getBannerDetail - Get the banner_detail of the server - (string)
- getServerDesc - Get server description (string) 
```

## Credits:
This is a module that already existed but made using the axios module, I rewrote it using the node-fetch module and added some functions.
https://github.com/JackCrispy/fivem - Official Module
https://www.npmjs.com/package/fivem - Official package of npm