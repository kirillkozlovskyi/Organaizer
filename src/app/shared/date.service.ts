import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());
  changeMonth(dir: number) {
    const val = this.date.value.add(dir, 'month');
    this.date.next(val)
  }
  changeDay(date: moment.Moment) {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(value);
  }
}
