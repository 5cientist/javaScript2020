const names =[
    "youtube",
    "facebook",
    "instagram",
    "netflix",
    "Amazon"
];

for (const n of names){
    console.log(n);
}
/*

output

youtube
facebook
instagram
netflix
Amazon
*/

const symbol = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    wbz: "WhiteBrainZ"
}

for(const n in symbol){
   // console.log(n);
/*
output:
yt
ig
fb
wbz
*/
   // console.log(symbol[n]);
/*
output:
instagram
fb
facebook
wbz
WhiteBrainZ
*/

    console.log(`Key is ${n} and value is: ${symbol[n]}`);
/*
output:
Key is yt and value is: youtube
Key is ig and value is: instagram
Key is fb and value is: facebook
Key is wbz and value is: WhiteBrainZ
*/

}