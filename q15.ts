let guest: string[] = ["Furqan","Kamran","Farhan","Rehan"];

console.log(`Due to some personal reason Mr.${guest[1]} can't attend dinner\n`);
guest[1] = "Kashif"

console.log(`New list of guest who are comming to dinner\n`);
for(let i = 0; i < guest.length; i++){
    console.log(`${i + 1}. ${guest[i]}`);
}

guest.map((items) =>{
    console.log(`Mr.${items} You are invited to dinner\n`);
})