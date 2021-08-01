import { ReactionRole } from "reaction-role";

export function reactionRole(token) {
  const system = new ReactionRole(token);

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
