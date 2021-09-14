import { Telegraf } from 'telegraf';

import {db} from "./firebase"

const bot = new Telegraf('1970249276:AAERXHIJo4YUGnMrZ4EOgV4o-6R29bsLmes');

console.log("asddsadasd");

class user {
    public name: string
    public PERSID: number
    public Dates: {[key: string]: any}
    public HUB: string
    constructor(name:string,PERSID:number,Dates:{[key: string]: any},HUB:string) {
        this.name = name
        this.PERSID = PERSID
        this.Dates = Dates
        this.HUB = HUB
    }

    static getDate(){
        let x = new Date();
        const [month, day, year] = [x.getMonth(), x.getDate(), x.getFullYear()];
        return `${day}|${month + 1}|${year}`;
    }

    /**
     * get Status
     */
    public getStatus() {
        
        return this.Dates[user.getDate()] ||= "NONE" 
    }
}

let y:any[] = []
db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const x = new user(doc.data().name,doc.data().PERSID,doc.data().Dates,doc.data().HUB)
        console.log(x.getStatus());
        console.log(x.PERSID);
        
        
        y.push(x)
        // console.log(doc.id, " => ", doc.data());
    });
    console.log(getPS(y));
    
    
    
});

bot.command('start', (ctx: { from: any; chat: { id: any; }; }) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, JSON.stringify(y), {
    })
})

bot.launch()

function getPS(y:any[]) {
    let x = "3TPT Parade State for " + user.getDate().replace("|","/")
    let p = {
        WFH: 0,
        PRESENT: 0,
        COURSE: 0,
        NONE:0
    }
    y.forEach(element => {
        (p as any)[element.getStatus() as any] += 1
    });

    return p
}