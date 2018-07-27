var Functions = /** @class */ (function () {
    function Functions() {
        this.msg = 'Hello World';
    }
    Functions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    return Functions;
}());
var example = new Functions(); //Tworzymy obiekt naszej klasy
example.showMsg(); //Wywolujemy nasza funkcje 
