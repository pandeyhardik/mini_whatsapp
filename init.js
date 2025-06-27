const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection is successful");

}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let allchats = [
    {
    from: "hardik",
    to: "abhay",
    msg: "send me the mail",
    created_at: new Date(),
},

{
    from: "nikhil",
    to: "soham",
    msg: "send me the phots",
    created_at: new Date(),
},

{
    from: "ritesh",
    to: "abhay",
    msg: "hi what u r doing",
    created_at: new Date(),
},

{
    from: "saumys",
    to: "hrdik",
    msg: "send me the notes",
    created_at: new Date(),
}

];


Chat.insertMany(allchats);

