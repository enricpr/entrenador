import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ExerciseService {
  exercises: FirebaseListObservable<any>;
  newExercise: Exercise = new Exercise();

  constructor(af: AngularFire) {
    this.exercises = af.database.list('/exercises');
  }

  getAllExercises(): FirebaseListObservable<any> {
    return this.exercises;
  }
}
