var REQUEST_AI = require('../wit-ai/RequestAi');

var token = '';
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  console.log("command")
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  REQUEST_AI.sendWit(msg.body);

  // bot.sendMessage(chatId, JSON.stringify(msg));
});