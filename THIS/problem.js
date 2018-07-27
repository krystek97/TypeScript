var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = 'Witaj swiecie';
    }
    ThisProblem.prototype.mark = function () {
        return function () {
            console.log(this.msg);
        };
    };
    return ThisProblem;
}());
var note = new ThisProblem;
var fun = note.mark();
fun(); //Wypisuje slowa na konsole 
