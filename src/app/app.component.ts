import { Component } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExerciseService]
})
export class AppComponent {
  title = 'entrenador';

  constructor(private exerciseService: ExerciseService) {
  }
  get exercises() {
    return this.exerciseService.getAllExercises();
  }
}
