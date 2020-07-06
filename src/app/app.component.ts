import { Component } from '@angular/core';
import {ReminderService} from './reminder.service';
import {Reminder} from './reminder';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reminderFE';

  constructor(private reminderService:ReminderService) { }
  reminders: Reminder[] = new Array();
  public rid: string;
  reminder: Reminder = new Reminder();

  onClickReminder(rname){
    this.reminderService.getReminderByName(rname).subscribe(data => this.reminder = data);
    
    this.reminders.push(this.reminder);
    }
    ngOnInit() {
    }
  
    onSubmit(){
    }
}
