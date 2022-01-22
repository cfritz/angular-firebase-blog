import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'courseFilter' })
export class CourseFilterPipe implements PipeTransform {
  transform(courses: any[], userId: string) {
      if (courses && userId) {
        return courses.filter(course => course.participants && course.participants[userId]);
      }
    return [];
  }
}