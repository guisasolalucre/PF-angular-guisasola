import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Course } from '../../courses/model/Course';
import { CourseService } from '../../courses/course.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
	viewDate: Date = new Date();
	events: CalendarEvent[] = [];

	constructor(
		private courseService: CourseService,
		private router: Router,
	) {
		this.loadEvents()
	}

	loadEvents(): void {
		this.courseService.getCourses()
			.subscribe((courses: Course[]) => {
				this.events = this.transformCoursesToCalendarEvents(courses);
			});
	}

	transformCoursesToCalendarEvents(courses: Course[]): CalendarEvent[] {
		const calendarEvents: CalendarEvent[] = [];

		courses.forEach((course, index) => {
			const event: CalendarEvent = {
				id: course.id,
				title: course.name!.nameString,
				start: new Date(course.startDate),
				end: new Date(course.endDate)
			};
			calendarEvents.push(event);
		});

		return calendarEvents;
	}

	navigateMonth(change: number): void {
		this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + change);
		this.loadEvents();
	}

	goToToday(): void {
		this.viewDate = new Date();
		this.loadEvents();
	}

	goToDetail(id: string): void {
		this.router.navigate(
			[
				'dashboard',
				'courses',
				'detail',
				id,
			],
		);
	}



	isDayFromPreviousMonth(date: Date, viewDate: Date): boolean {
		const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
		return date < firstDayOfMonth;
	}

	isDayFromNextMonth(date: Date, viewDate: Date): boolean {
		const lastDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
		return date > lastDayOfMonth;
	}

	isToday(date: Date): boolean {
		const today = new Date();
		return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
	}

	isStartDay(event: CalendarEvent, day: any): boolean {
		return event.start.getDate() === day.date.getDate() &&
			event.start.getMonth() === day.date.getMonth() &&
			event.start.getFullYear() === day.date.getFullYear();
	}

	isEndDay(event: CalendarEvent, day: any): boolean {
		return !!event.end &&
			event.end.getDate() === day.date.getDate() &&
			event.end.getMonth() === day.date.getMonth() &&
			event.end.getFullYear() === day.date.getFullYear();
	}

}