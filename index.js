const fetch = require("node-fetch")
const got = require("got")
const fs = require("fs")
const child_process = require("child_process")

async function main(){
    github_api = await fetch("https://api.github.com/repos/freyacodes/Lavalink/releases/latest").then(e => e.json())
    download_url = github_api.assets[0].browser_download_url
    download = got.stream(download_url).pipe(fs.createWriteStream("Lavalink.jar"))
    download.on("finish", () => {
        child_process.execSync("java -jar Lavalink.jar", { stdio: "inherit" })
    })
};main();