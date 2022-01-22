import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: Observable<any>;
  public userId: string = '';

  constructor(
    private coursesService: CoursesService,
    private userService: UserService
  ) { 
    this.courses = this.coursesService.getAllCourses();
  }

  ngOnInit(): void {
      this.userService.getUserId().subscribe(userId => this.userId = userId);
  }

  public leaveCourse(courseId: number): void {
    this.coursesService.leaveCourse(courseId)
      .subscribe();
  }

  public bookCourse(course: Course): void {
    this.coursesService.joinCourse(course).subscribe();
  }

  public bookingAllowed(capacity: number, attendeesCount: number): boolean {
      return capacity - attendeesCount > 0;
  }
}
