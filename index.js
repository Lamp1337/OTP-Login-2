/**
 * @author OTP Login V3 Code by Lamp
 * @author Remake with Tudo12
 * @param IDEA Numex
 */

const getIP = require("external-ip")();
const readline = require("readline");
const { Webhook, MessageBuilder } = require("discord-webhook-node");
const os = require("os");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ran = randomNum(1, 9999);
function sendHook(webhookUrl) {
  getIP((err, ip) => {
    if (err) {
      throw err;
    }
    const hook = new Webhook(webhookUrl);
    var today = new Date();
    const msg = new MessageBuilder()
      .setTitle("Login Logs")
      .setColor("#00FF00")
      .setDescription(`\`\`\`\nUsername : ${os.userInfo().username}\nIP Address : ${ip}\nCode : ${ran}\nDate : ${today.toLocaleString("en-GB", { timeZone: "UTC" })}\`\`\``);
    hook.send(msg);
  });
}
function quest() {
  rl.question(`[•] Password : `, (pasw) => {
    if (pasw.trim() == ran) {
      console.log("Successfuly Login!");
    } else {
      console.log("Wrong Password!");
      process.exit(1);
    }
    process.exit(1);
  });
}

sendHook("YOUR_WEBHOOK_URL");
quest();
