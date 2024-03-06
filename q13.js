var transportation = ["Honda Motorcycle", "Aulto", "Audi"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i]));
}
transportation.map(function (i) { return console.log("I would like to own a ".concat(i)); });
