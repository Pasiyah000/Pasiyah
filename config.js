
const envv2 = require('./config-db')
var GITHUB_AUTH_TOKEN;
var GITHUB_USERNAME;
var SESSION_ID;𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XrpB0SbS#6nobom8WUvAvTUxvgFaWDOVjMwh1NLmm3oIFQDifYd8

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN
} else {
GITHUB_AUTH_TOKEN = envv2.GITHUB_AUTH_TOKEN
}

if(process.env.GITHUB_USERNAME){
GITHUB_USERNAME = process.env.GITHUB_USERNAME
} else {
GITHUB_USERNAME = envv2.GITHUB_USERNAME
}


if(process.env.SESSION_ID){𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XrpB0SbS#6nobom8WUvAvTUxvgFaWDOVjMwh1NLmm3oIFQDifYd8
SESSION_ID = process.env.SESSION_ID
} else {𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XrpB0SbS#6nobom8WUvAvTUxvgFaWDOVjMwh1NLmm3oIFQDifYd8
SESSION_ID = envv2.SESSION_ID𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XrpB0SbS#6nobom8WUvAvTUxvgFaWDOVjMwh1NLmm3oIFQDifYd8
}

module.exports = {
SESSION_ID,𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XrpB0SbS#6nobom8WUvAvTUxvgFaWDOVjMwh1NLmm3oIFQDifYd8
GITHUB_USERNAME,
GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://myrender971:iwS8N2qB3Q8wMw83@cluster0.he9fd.mongodb.net/"    
};
