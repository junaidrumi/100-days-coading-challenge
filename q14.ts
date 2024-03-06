let guest: string[] = ["Furqan","Kamran","Farhan","Rehan"];
// loop
for(let i = 0; i < guest.length; i++){
    console.log(`Mr.${guest[i]} ! You are invited to dinner\n`);
}

// map
guest.map((items) =>{
    console.log(`Mr.${items}, You are invited to dinner\n`);
})