const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true });

client.on('ready', () => {
  console.log(`Le bot  ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === "salut") msg.channel.send("salut");
    if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous",{disableEveryone: false});
    if (msg.content === "noteveryone") msg.channel.send("@everyone, (noteveryone),salut à tous");
});

client.login('NjM5MTQ4NTcyMzU2NTA5Njk5.XbnDoQ.CQeFw216KyM7r437lf11lhRyuis');