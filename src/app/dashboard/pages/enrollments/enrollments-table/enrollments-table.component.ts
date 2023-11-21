import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnrollment } from '../model/IEnrollment';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { enrollments } from '../store/enrollment.selectors';
import { EnrollmentActions } from '../store/enrollment.actions';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent {

  displayedColumns: string[] = ['course', 'teacher', 'student', 'startDate', 'actions'];

  enrollments$: Observable<IEnrollment[]>

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild('enrollmentsSort', { static: false })
  enrollmentsSort!: MatSort;

  dataSource = new MatTableDataSource<IEnrollment>()

  constructor(
    private store: Store,
  ) {
    this.enrollments$ = this.store.select(enrollments)
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    this.initialize();
  }

  initialize(): void {
    this.enrollments$.subscribe((data) => {
      this.dataSource = new MatTableDataSource<IEnrollment>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (enrollment, sortHeaderId) => {
        switch (sortHeaderId) {
          case 'course':
            return enrollment.course?.name?.nameString || '';
          case 'teacher':
            return enrollment.course?.teacher?.name || '';
          case 'student':
            return enrollment.student?.name || '';
          case 'startDate':
            return enrollment.course?.startDate?.toString() || 0;
          default:
            return '';
        }
      };
      this.dataSource.sort = this.enrollmentsSort;
    });
  }  

  deleteEnrollment(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(EnrollmentActions.deleteEnrollment({ id }))
        this.enrollments$ = this.store.select(enrollments)
      }
      Swal.fire({
        title: 'Deleted!',
        icon: 'success',
        confirmButtonText: 'OK',
        heightAuto: false,
        timer: 1500,
        timerProgressBar: true,
      })
    })
  }
}

