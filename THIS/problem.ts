class ThisProblem
{
    msg = 'Witaj swiecie' ; 

    mark()
    {
        return function()
        {
            console.log(this.msg) ; 
        }
    }
}
var note = new ThisProblem ;
var fun = note.mark() ;
fun() ; //Wypisuje slowa na konsole 