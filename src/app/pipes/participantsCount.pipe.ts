import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'participantsCount' })
export class ParticipantsCountPipe implements PipeTransform {
  public transform(course: any): number {
      if (course && course.participants) {
        return Object.getOwnPropertyNames(course.participants).length;
      }
    return 0;
  }
}