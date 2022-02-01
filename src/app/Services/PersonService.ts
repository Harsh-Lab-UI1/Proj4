import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class PersonService{
    constructor(private _http:HttpClient){}
    public getPerson():any{
        return this._http.get("https://gorest.co.in/public/v1/users")
    }
}