// Author: Travis Rosen
// Date: 09/19/2021
// Name: sign-in.service.ts
// Description: Creating sign-in



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;


  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1012];

  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
