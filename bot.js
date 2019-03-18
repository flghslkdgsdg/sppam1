client.on("ready", () => {
let channel =     client.channels.get("464066001403772929")
setInterval(function() {
channel.send(**Moataz spam , Moataz spam , Moataz spam , Moataz spam Moataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spamMoataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moataz spam , Moatazspam , Moataz, Moataz,Moataz ,**);
}, 305)
})

client.on('message', message => {
 if(message.author.id !== "427611667631964180" )return;

let command = "2say"

if (!message.content.startsWith(command) || message.author.bot ) return;
const args = message.content.slice(command.length).split(/ +/g).join(" ");
var array = [${args}];
var str = array.join(' ');
if (message.content.startsWith(command)) {
message.channel.send(${args});
}

});
client.login(process.env.BOT_TOKEN)
