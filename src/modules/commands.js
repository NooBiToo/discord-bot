export function commands(client) {
  client.on("message", (message) => {
    if (message.content === "!q") {
      message.channel.send("работаю");
    } else if (message.content === "!Макс") {
      message.channel.send("лох");
    } else if (message.content === "!Эрл") {
      message.channel.send("лучший");
    }
  });
  return client;
}
