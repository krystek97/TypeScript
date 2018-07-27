var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype["function"] = function () {
        var num = 99; //Większy zasięg
        for (num = 0; num < 3; num++) {
            console.log(num);
        }
        console.log(num);
    };
    //let ogranicza zasieg zmiennej
    LetConstVar.prototype.function2 = function () {
        var num2 = 99;
        for (num2 = 0; num2 < 3; num2++) {
            console.log(num2);
        }
        console.log(num2);
    };
    LetConstVar.prototype.constfunction = function () {
        var num3 = 200; //Zmienna , która nie zmienia swojej wartosci
    };
    return LetConstVar;
}());
var exampl = new LetConstVar();
exampl["function"]();
var examp2 = new LetConstVar();
examp2.function2();
