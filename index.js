// OTP Login V2 Code by Lamp
// IDEA = Numex
var getIP = require('external-ip')();
const rancolor = require("randomcolor");
var readline = require('readline');
const {
    Webhook,
    MessageBuilder
} = require('discord-webhook-node');
const os = require("os"); 
const user = os.userInfo().username
var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
    });
getIP((err, ip) => {
    if (err) {
        throw err;
    }
  
  const Hook = new Webhook("Your Webhook URL");
  
  const msg = new MessageBuilder()
                .setTitle("Login Logs")
                .setColor(ranc)
                .setDescription(`\`\`\`\nUsername : ${user}\nIP Address : ${ip}\nCode : ${ran}\`\`\``)
  Hook.send(msg);
  });

var ran = randomNum(1,9999)
var ranc = rancolor();
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
ans = ran;
rl.question(`[•] Password : `,
(pasw)=> {
    if(pasw.trim() == ans) {
        console.log('Successfuly Login!')
    }
    else {
        console.log('Wrong Password!')
        process.exit(1);
    }
})
