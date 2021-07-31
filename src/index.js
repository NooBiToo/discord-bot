import Discord from "discord.js";
import config from "./config.js";

import { reactionRole } from "./modules/reactionRole.js";
import { welcome } from "./modules/welcome.js";
import { commands } from "./modules/commands.js";

const client = new Discord.Client();
const token = config.token;

client.on("ready", function () {
  console.log(client.user.username + " запустился!");
});

reactionRole(token, client);
welcome(config, client);
commands(client);

client.login(token);
