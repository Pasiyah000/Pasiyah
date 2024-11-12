
const envv2 = require('./config-db')
var GITHUB_AUTH_TOKEN;
var GITHUB_USERNAME;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path:𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=qjBUya7Z#DSs6gm0LReHsAUwDAM1W9wmN3nuBJvx5Nv989qTpCTM './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true :𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=qjBUya7Z#DSs6gm0LReHsAUwDAM1W9wmN3nuBJvx5Nv989qTpCTM false;
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


if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
} else {
SESSION_ID = envv2.SESSION_ID
}

module.exports = {
SESSION_ID,
GITHUB_USERNAME,
GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://myrender971:iwS8N2qB3Q8wMw83@cluster0.he9fd.mongodb.net/"    
};
