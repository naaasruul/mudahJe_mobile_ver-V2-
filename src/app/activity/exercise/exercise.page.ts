import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  currentIndex: number = 0;
  selectedOptionIndex: number | null = null;
  questions: any[] = [];
  currentQuestion: any;

  constructor(
    private actionSheetController: ActionSheetController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const topic = params.get('topic') || 'default'; // Provide a default value if topic is null
      this.questions = this.getQuestionsByTopic(topic);
      this.currentQuestion = this.questions[this.currentIndex];
    });
  }
  

  getQuestionsByTopic(topic: string): any[] {
    let filteredQuestions: { id: number, question: string, imageUrl?: string, options: string[], correctAnswer: number }[] = [];
    if (topic === 'greeting') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/greeting
      filteredQuestions = [
        {
          id: 1,
          question: 'What is the date for this event?',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/National_Park_Service_9-11_Statue_of_Liberty_and_WTC_fire.jpg',
          options: ['11 September 2001', '11 September 2004', '9 November 2001', '2 June 2024'],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Who's beautiful ass is this? 👅😜😜",
          imageUrl: "assets/images/zaim.jpg",
          options: ['John', 'Jane', 'Zaim', 'Bob'],
          correctAnswer: 2
        }
      ];
    } else if (topic === 'family') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/family
      filteredQuestions = [
        {
          id: 1,
          question: 'What is the capital of France?',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Ballon_Generali_and_the_Eiffel_Tower.jpg',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswer: 2 // index
        },
        {
          id: 2,
          question: 'Which planet is known as the Red Planet?',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
          options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 1 // index
        }
      ];
    }
  
    console.log('Loaded questions:', filteredQuestions);
    return filteredQuestions;
  }
  
  

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
