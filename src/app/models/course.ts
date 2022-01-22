import { User } from './user';

export interface Course {
    id: number;
    name: string;
    startTime: number;
    endTime: number;
    maxNumberAttendees: number;
    attendees?: User[];
}