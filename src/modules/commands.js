export function commands(prefix, client) {
  client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === "q") {
      message.channel.send("работаю");
    } else if (command === "args") {
      if (!args.length) {
        return message.channel.send(
          `Ты не передал никаких аргументов, ${message.author}!`
        );
      } else if (args[0] === "foo") {
        return message.channel.send("bar");
      }

      message.channel.send(`Первый аргумент: ${args[0]}`);
    }
  });
  return client;
}
