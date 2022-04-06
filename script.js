var age = 29;
var str = (age < 30) ? "Adult" : "Old";
{
    console.log(str);  //Adult
}


var age = 29;
if (age < 15) {
    console.log("Young");
}
else if (age > 15 && age < 30) {
    console.log("Adult");
}


var day = "monday";
switch (day) {
    case "monday": console.log("0");
        break;
    case "tuesday": console.log("1");
        break;
    case "wednesday": console.log("2");
        break;
    case "thursday": console.log("3");
        break;
    case "friday": console.log("4");
        break;
    case "saturday": console.log("5");
        break;
    case "sunday": console.log("6");
        break;
    default: console.log("not a valid day")
} 