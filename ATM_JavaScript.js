const BALANCE="20000"
console.log("Balence Capacity👉",BALANCE,"💶💴💵")
console.log("*******🙏WELCOME TO ATM CENTER SERVICE🙏********")
let readlineSync = require("readline-sync");
var card = readlineSync.question("👉Enter the ATM card 🏧 ")
if (card == "ATM"){                                                                                                                                                                                                                                                      
    console.log("Your transaction process is start........📥\nPlease Don't Remove the Card");
    var language =  readlineSync.question("👉enter the language \n 1.English or  2.Hindi :")
    if (language =="1") {
        console.log("your choose launguage is correct");
        var account = readlineSync.question("👉enter the account type \n 1.saving 2.currunt :")
        if (account == "1" || account == "2"){
            console.log("ok");
            var pin_code = readlineSync.question("👉enter the 4 digit pin code 🔐:");
            if (pin_code==1234){
                console.log("correct");
                var amount_cash = readlineSync.questionInt("👉enter the amount cash💶💴💵 :");
                if (amount_cash %100==0){
                    if (amount_cash>0 && amount_cash<20000){
                        console.log(amount_cash,"withdraw money");
                        console.log(20000-amount_cash,"Remaining Money in ATM");
                        var receipt=readlineSync.question("👉Do you want receipt \n 1.Yes or 2.No")
                        if (receipt=="1" || receipt=="2"){
                            console.log("take a printed receipt 📃");
                            console.log("please remove your card");
                        }else{
                            console.log("you dont have receipt")}
                    }else {
                        console.log(amount_cash,"This amount is not your account")}
                }else{
                    console.log("Your amount is not correct")}
            }else {
                console.log("This is not your pin code")} 
        }else {
            console.log("This is not account")}
    }else if(language =="2"){
        console.log("आपकी चुनी हुई भाषा सही है")
        var account = readlineSync.question("👉कृपया  अपना खाता चुना: \n 1.बचत खाताकुंजी 2.चालु खाताकुंजी:")
            if (account == "1" || account == "2"){
                console.log("धन्यवाद");
                var pin_code = readlineSync.question("👉कृपाया अपना खाताकुंजी अंक डाले 🔐:");
                if (pin_code==1234){
                    console.log("आपका चुना अंक सही है");
                    var amount_cash = readlineSync.questionInt("👉कृपाया निस्तारन रकम डाले 💶💴💵 :");
                    if (amount_cash %100==0){
                        if (amount_cash>0 && amount_cash<20000){
                            console.log(amount_cash,"पैसे निकाले");
                            console.log(20000-amount_cash,"आपका खाताकुंजी में बचा पैसा");
                            var receipt=readlineSync.question("👉क्या आपको परची चाहिए \n 1.हाँ  or 2.नहीं")
                            if (receipt=="1" || receipt=="2"){
                                console.log("कृपाया अपनी परची ले 📃");
                                console.log("कृपाया अपना कार्ड निकल ले");
                            }else{
                                console.log("आपके पास परची  नहीं है")}
                        }else {
                            console.log(amount_cash,"यह राशि आपका खाता नहीं है")}
                    }else{
                        console.log("यह राशि आपका खाता में नहीं है")}
                }else {
                    console.log("यह आपका पिन कोड नहीं है")} 
            }else {
                console.log("यह खाता नहीं है")}
    }else{
        console.log("कृपाया हिंदी या अंग्रेजी का ही चुनावा करे")
    }
}else {
    console.log("this is not atm card")}

