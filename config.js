const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=vrpU3YxS#_RgwLK1RxuCfCP7o4hq4UgvFYJYoTr3h5NhU3Rsa58c",
MONGODB: process.env.MONGODB || "mongodb+srv://papahu084:RmSHsh27boiw42Mm@cluster0.lslf1.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
