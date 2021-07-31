export function welcome(config, client) {
  client.on("guildMemberAdd", (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(
      (channel) => channel.id === config.welcomechannelID
    );
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    var role = member.guild.roles.cache.find(
      (role) => role.id === "870595826899111947"
    );
    var user = member.guild.members.cache.get(member.user.id);
    user.roles.add(role);
    channel.send(`Привет, ${member} добро пожаловать на сервер!
По игре New World можешь обращаться к <@495663559225901066>
По игре Destiny2 к   <@311936176678371348>`);
  });

  client.on("guildMemberRemove", (member) => {
    const channel = member.guild.channels.cache.find(
      (channel) => channel.id === config.leavech
    );
    if (!channel) return;
    channel.send(`${member} - покинул сервер`);
  });
  
  return client;
}
