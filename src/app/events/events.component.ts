import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any 

  eventsUrl = 'http://localhost:3000/api/events'
  constructor( private _http : HttpClient ) { }

  ngOnInit(): void {
    this._http.get(this.eventsUrl).subscribe( res => 
      {
        console.log(res)
        this.events = res
      },
       error => console.log(error) )

  }

}
