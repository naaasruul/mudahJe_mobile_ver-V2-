import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  activityId: string = '';
  currentIndex: number = 0;

  questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      imageUrl: 'https://example.com/image1.jpg',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      imageUrl: 'https://example.com/image2.jpg',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    // Add more questions as needed
  ];

  currentQuestion = this.questions[this.currentIndex];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('activityId');
      this.activityId = id ? id : '';
      console.log(id);
    });
  }

  selectAnswer(selectedOption: string) {
    if (selectedOption === this.currentQuestion.correctAnswer) {
      console.log('Correct!');
      // Handle correct answer logic
    } else {
      console.log('Wrong!');
      // Handle wrong answer logic
    }
  }

  nextQuestion() {
    this.currentIndex = (this.currentIndex + 1) % this.questions.length;
    this.currentQuestion = this.questions[this.currentIndex];
  }
}
