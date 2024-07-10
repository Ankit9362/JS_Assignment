var car=
{
    Company:"Supra",
    founder:"Sunny",
    yearreleased: 1999,
    printCardata:function()
    {
        console.log("The car company "+ this.Company +" was founded by "+ this.founder +" in "+ this.yearreleased );
    }
};
console.log(car.printCardata());