var guest = ["Furqan", "Kamran", "Farhan", "Rehan"];
console.log("Due to some personal reason Mr.".concat(guest[1], " can't attend dinner\n"));
guest[1] = "Kashif";
console.log("New list of guest who are comming to dinner\n");
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guest[i]));
}
guest.map(function (items) {
    console.log("Mr.".concat(items, " You are invited to dinner\n"));
});
