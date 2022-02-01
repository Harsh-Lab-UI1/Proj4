import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Services/PersonService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './PersonComponent.html',
  
})
export class PersonComponent implements OnInit {
  public result:any;
  constructor(private _service:PersonService) { }

  ngOnInit() {
    this._service.getPerson().subscribe((res: any) => this.result = res);
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Server Side Error !");
      } else {
        console.log("Client Side Error   !");
      }
    }
  }


}