class LetConstVar
{
    function()
    {
        var num = 99 ; //Większy zasięg
        for(num = 0 ; num < 3 ; num++)
        {
            console.log(num) ; 
        }
        console.log(num) ;
    }

    //let ogranicza zasieg zmiennej
    function2()
    {
        let num2 = 99 ;
        for(num2 = 0 ; num2<3 ; num2++)
        {
            console.log(num2) ; 
        }
        console.log(num2) ; 
    }

    constfunction()
    {
        const num3 = 200; //Zmienna , która nie zmienia swojej wartosci
    }
}
let exampl = new LetConstVar() ; 
exampl.function() ; 
let examp2 = new LetConstVar() ; 
examp2.function2() ;     
