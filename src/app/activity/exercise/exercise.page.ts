import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage {

  currentIndex: number = 0;
  selectedOptionIndex: number | null = null;
  questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      imageUrl: 'https://example.com/image1.jpg',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 2 // Index of 'Paris' in the options array
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      imageUrl: 'https://example.com/image2.jpg',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1 // Index of 'Mars' in the options array
    },
    // Add more questions as needed
  ];

  currentQuestion = this.questions[this.currentIndex];

  constructor(private actionSheetController: ActionSheetController) { }

  async selectAnswer(event: CustomEvent) {
    const selectedIndex = event.detail.value;
    this.selectedOptionIndex = selectedIndex;

    let message;
    if (this.selectedOptionIndex === this.currentQuestion.correctAnswer) {
      message = 'Correct!';
    } else {
      message = 'Incorrect! The correct answer is ' + this.currentQuestion.options[this.currentQuestion.correctAnswer];
    }

    const actionSheet = await this.actionSheetController.create({
      header: message,
      buttons: [{
        text: 'Next Question',
        handler: () => {
          this.nextQuestion();
        }
      }]
    });
    await actionSheet.present();
  }

  nextQuestion() {
    this.currentIndex = (this.currentIndex + 1) % this.questions.length;
    this.currentQuestion = this.questions[this.currentIndex];
    this.selectedOptionIndex = null; // Reset the selected option
  }

  selectOption(index: number) {
    this.selectedOptionIndex = index;
    const customEvent = new CustomEvent('ionChange', {
      detail: { value: index }
    });
    this.selectAnswer(customEvent);
  }
}
