import { Telegraf } from 'telegraf';

import {db} from "./firebase"

const bot = new Telegraf('1970249276:AAERXHIJo4YUGnMrZ4EOgV4o-6R29bsLmes');

console.log("asddsadasd");

let x:any[] = []
db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        x.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
});

bot.command('start', (ctx: { from: any; chat: { id: any; }; }) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, JSON.stringify(x), {
    })
})

bot.launch()