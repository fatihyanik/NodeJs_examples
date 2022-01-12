//const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you");
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"));
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8");
        console.log(newData);
    }catch(err){
        console.error(err)
    }
}

fileOps();

/* fs.readFile("./files/starter.txt", (err,data) => {
    if(err) throw err;
    console.log(data.toString()); //buraya toString() koymazsak buffer aliyoruz. Koyunca Hi, my name is Fatih
}) */

/* fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err,data) => {
    if(err) throw err;
    console.log(data); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"
}) */

/* fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you", (err) => {
    if(err) throw err;
    console.log("Write complete"); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"
})

fs.appendFile(path.join(__dirname, "files", "test.txt"), "Testing text", (err) => {
    if(err) throw err;
    console.log("Append complete"); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"
}) */

/* fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you", (err) => {
    if(err) throw err;
    console.log("Write complete"); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"

    fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nYes it is", (err) => {
        if(err) throw err;
        console.log("Append complete"); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"

        fs.rename(path.join(__dirname, "files", "reply.txt"),path.join(__dirname, "files", "newReply.txt"), (err) => {
            if(err) throw err;
            console.log("Rename complete"); //buraya toString() koymadigimiz zaman yukariya "utf8" koymaliyiz"
        })
    })
}) */




console.log("Hello....")



// exit on caught errors
process.on('uncaughtException', err =>{
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})

