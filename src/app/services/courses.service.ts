import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { forkJoin, from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Course } from '../models/course';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase,
    private userService: UserService) { }

  public getAllCourses(): Observable<any> {
    return this.db.object('courses').valueChanges();
  }

  public joinCourse(course: Course): Observable<any> {
    return this.userService.getUserId()
    .pipe(
      mergeMap((userId) => {
        return forkJoin([from(this.db.object('users/' + userId + '/courses').update({ [course.id]: true })),
        from(this.db.object('courses/' + course.id + '/participants/').update({ [userId]: true }))]);
      }));
  }

  public leaveCourse(courseId: number): Observable<any> {
    return this.userService.getUserId()
    .pipe(
      mergeMap((userId) => {
        return forkJoin([from(this.db.object('users/' + userId + '/courses/' + courseId).remove()),
        from(this.db.object('courses/' + courseId + '/participants/' + userId).remove())]);
      }));
  }

}
