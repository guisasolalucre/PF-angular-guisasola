import { Component } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  hour: number = 0
  minute: number = 0
  second: number = 0
  month: string = ''
  day: number = 0
  ordinal: string = ''
  year: number = 0
  
  clockSubscription: Subscription;
  loading: boolean = false;

  constructor(
  ){
    this.loading = true;
    
    this.clockSubscription = this.getTime().subscribe( {
      next: (now: Date) => {
        this.hour = now.getHours();
        this.minute = now.getMinutes();
        this.second = now.getSeconds();
        this.month = this.getMonth(now.getMonth());
        this.day = now.getDate();
        this.ordinal = this.getOrdinal(this.day)
        this.year = now.getFullYear();

        this.loading = false;
      },
      error: (err) => { console.log(err) },
      complete: () => {}
    });
  }


  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
    this.loading = false;
  }


  getTime(): Observable<Date>{
    return interval(1000).pipe(
      map(() => new Date())
    );
  }


  getMonth(monthNum: number): string{
    switch (monthNum){
      case 0: {return 'January'};
      case 1: {return 'February'};
      case 2: {return 'March'};
      case 3: {return 'April'};
      case 4: {return 'May'};
      case 5: {return 'June'};
      case 6: {return 'July'};
      case 7: {return 'August'};
      case 8: {return 'Semtember'};
      case 9: {return 'October'};
      case 10: {return 'November'};
      case 11: {return 'December'};
      default: {return ''}
    }
  }


  getOrdinal(day: number): string{
    switch (day){
      case 1: {return 'st'};
      case 2: {return 'nd'};
      case 3: {return 'rd'};
      default: {return 'th'}
    }
  }

}
