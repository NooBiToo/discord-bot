import { ReactionRole } from "reaction-role";
import Discord from "discord.js";

export function reactionRole(token, client) {
  const system = new ReactionRole(token);

  // Create an event listener for messages
  client.on("message", (message) => {
    // If the message is "ping"
    if (message.content === "!Макс") {
      // Send "pong" to the same channel
      message.channel.send("Черт");
    }
  });

  // create option with messages
  const option = system.createOption(":eft:869787620018905138", [
    "766987280161570837",
  ]);

  // create message
  system.createMessage(
    "533587695771975681",
    "661987897439682566",
    1, // reaction limit
    option
  );
  system.init();
}
