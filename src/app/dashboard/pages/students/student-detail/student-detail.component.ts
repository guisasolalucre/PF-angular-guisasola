import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

}
