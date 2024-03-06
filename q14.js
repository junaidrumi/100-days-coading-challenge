var guest = ["Furqan", "Kamran", "Farhan", "Rehan"];
// loop
for (var i = 0; i < guest.length; i++) {
    console.log("Mr.".concat(guest[i], " ! You are invited to dinner\n"));
}
// map
guest.map(function (items) {
    console.log("Mr.".concat(items, ", You are invited to dinner\n"));
});
