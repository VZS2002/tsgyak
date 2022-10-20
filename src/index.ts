interface Results {
    winner : string;
    date: Date;
    result() : string;
}

class Football implements Results{
    winner : string;
    #hazai : number;
    #vendeg : number;
    date : Date;

constructor(winner:string, hazai:number, vendeg:number, datum:Date){
this.winner = winner;
this.#hazai = hazai,
this.#vendeg = vendeg;
this.date = datum;
}
    result(): string {
       return "Football match: " + this.#hazai + " - "+this.#vendeg;
    }
}

class Marathon implements Results {
    winner: string;
    date : Date;

    constructor(winner:string, date : Date)
    {

        this.winner=winner;
        this.date = date;
    }

    result(): string {
        return "Marathon: "+this.date.getMinutes()+ " min " + this.date.getSeconds()+" s"
    }
}


/*
class Calvinball implements Results{
    winner:string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    date : Date;
    constructor(winner:string, date:Date){
        this.winner=this.Winner(winner);
        this.date = date;
    }
    result(): string {
        throw new Error("Method not implemented.");
    }

  
}
*/

let eredmenyek : Results[] = [
 new Football("Asd",3,2,new Date()),
 new Marathon("Geci",new Date(2000,10,10,10,6,23))

];

for (let elem of eredmenyek)
{
    console.log(elem.result());
}