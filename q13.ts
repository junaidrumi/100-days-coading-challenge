let transportation: string[] = ["Honda Motorcycle","Aulto","Audi"];
// loop
for (let i = 0; i < transportation.length; i++){
    console.log(`I would like to own a ${transportation[i]}`);
}


// map
transportation.map((i) => console.log(`I would like to own a ${i}`));