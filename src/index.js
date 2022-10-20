"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_hazai, _Football_vendeg;
class Football {
    constructor(winner, hazai, vendeg, datum) {
        _Football_hazai.set(this, void 0);
        _Football_vendeg.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_hazai, hazai, "f"),
            __classPrivateFieldSet(this, _Football_vendeg, vendeg, "f");
        this.date = datum;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_hazai, "f") + " - " + __classPrivateFieldGet(this, _Football_vendeg, "f");
    }
}
_Football_hazai = new WeakMap(), _Football_vendeg = new WeakMap();
class Marathon {
    constructor(winner, date) {
        this.winner = winner;
        this.date = date;
    }
    result() {
        return "Marathon: " + this.date.getMinutes() + " min " + this.date.getSeconds() + " s";
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
let eredmenyek = [
    new Football("Asd", 3, 2, new Date()),
    new Marathon("Futo", new Date(2000, 10, 10, 10, 6, 23))
];
for (let elem of eredmenyek) {
    console.log(elem.result());
}
