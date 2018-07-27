class DataType
{
    male  = 'Krystian' ; //Dane typu String
    //Dane typu Number 
    age = 20 ;
    //Tablica , na samym poczatku musimy okreslic jej typ , w tym przypadku jest to typ string 
    workers : string[] = {'Krystian' , 'Marian' , 'Wlodzimierz' , 'Stach' , 'Waldek'} 
    //Typ Tuple , może przechowywać dwa różne typy
    pair : [string , number] = {'Krystian' , 1} ;
    //Do typu any mozemy przypisac dowolna wartosc
    anything : any = 20 ;
    
}
