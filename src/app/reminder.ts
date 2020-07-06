import { Time } from "@angular/common";

export class Reminder{
    public reminderId: string;
    public reminderName: string;
    public start_date: Date;
    public end_date: Date;
    public start_time: Time;
    public end_time: Time;
    public reminderDescription: string;
    public repeating: string;
}