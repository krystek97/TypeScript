class Functions
{
    msg = 'Hello World' ; 

    showMsg :void()
    {
        console.log(this.msg) ; 
    }
    
    text : string()
    {
        return 'Hello World' ; 
    }
    
    hello2()

}

var example = new Functions() ; //Tworzymy obiekt naszej klasy
example.showMsg() ;//Wywolujemy nasza funkcje 

