const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS] });
const prefix = '!'; // Specify the bot's command prefix here
const welcomeChannelName = 'welcome'; // Specify the name of the welcome channel here
const welcomeMessages = [
  'Welcome to the server, {member}!\n\nPlease introduce yourself in the #introductions channel. :wave:',
  'Hello {member}, welcome to the server!\n\nFeel free to explore the different channels and join in the conversation. :speech_balloon:',
  'Greetings, {member}! Welcome to the server!\n\nWe hope you enjoy your stay here. :smile:',
  'Welcome, {member}! We hope you find the community welcoming and helpful. :raised_hands:',
  'Ahoy there, {member}! Welcome aboard!\n\nWe are excited to have you here. :anchor:',
  'Hi {member}! Welcome to the server!\n\nPlease read the server rules in the #rules channel and have fun. :tada:',
  'Bienvenue, {member}! We are glad to have you here!\n\nDon\'t hesitate to ask questions and join in on the conversations. :handshake:'
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  // Get the channel where the welcome message will be sent
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === welcomeChannelName);
  if (!welcomeChannel) return;

  // Choose a random welcome message from the list
  const welcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

  // Create an embed with the welcome message and image placeholder
  const embed = new Discord.MessageEmbed()
    .setTitle('Welcome to the server!')
    .setDescription(welcomeMessage.replace('{member}', member))
    .setColor('#00FF00')
    .setThumbnail('https://media.discordapp.net/attachments/871779298510532658/883345127249178654/genshin-epic-wow.gif');

  // Send the embed to the welcome channel
  welcomeChannel.send(embed);
});

client.login('your-token-goes-here');
