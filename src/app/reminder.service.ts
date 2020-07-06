import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Reminder} from './reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private _http: HttpClient) { }


 url = 'http://localhost:8083';
  createReminder(reminder): Observable<Reminder>{
    return this._http.post<Reminder>(`${this.url}/reminder/create`,reminder);

  }
  getReminderByName(rname): Observable<Reminder>{
    return this._http.get<Reminder>(`${this.url}/reminder/{reminderName}/`+rname)
  }





}


//--------------------------------------------------------------------

