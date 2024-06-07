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

    // Add this method to check if the media URL is a video
    isVideoUrl(url: string): boolean {
      const videoExtensions = ['.mp4', '.webm', '.ogg'];
      return videoExtensions.some(ext => url.endsWith(ext));
    }

  getQuestionsByTopic(topic: string): any[] {
    let filteredQuestions: { id: number, question: string, mediaUrl?: string, options: string[], correctAnswer: number }[] = [];
    if (topic === 'greeting') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/greeting
      filteredQuestions = [
        {
          id: 1,
          question: '',
          mediaUrl: 'assets/videobahasaisyarat_mp4/Assalamualaikum.mp4',
          options: ['Assalammualaikum', 'Selamat Pagi Bapa', 'Terima Kasih'],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "",
          mediaUrl: "assets/videobahasaisyarat_mp4/selamatPagiBapa.mp4",
          options: ['Assalammualaikum', 'Selamat Pagi Bapa', 'Terima Kasih'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "",
          mediaUrl: "assets/videobahasaisyarat_mp4/terimaKasih.mp4",
          options: ['Assalammualaikum', 'Selamat Pagi Bapa', 'Terima Kasih'],
          correctAnswer: 2
        }
      ];
    } else if (topic === 'family') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/family
      filteredQuestions = [
        {
          id: 1,
          question: '',
          mediaUrl: 'assets/videobahasaisyarat_mp4/Bapa.mp4',
          options: ['Emak', 'Bapa', 'Abang'],
          correctAnswer: 1 // index
        },
        {
          id: 2,
          question: '',
          mediaUrl: 'assets/videobahasaisyarat_mp4/Emak.mp4',
          options: ['Bapa', 'Abang', 'Emak'],
          correctAnswer: 2 // index
        },
        {
          id: 3,
          question: 'Which planet is known as the Red Planet?',
          mediaUrl: 'assets/videobahasaisyarat_mp4/Abang.mp4',
          options: ['Emak', 'Bapa', 'Abang'],
          correctAnswer: 2 // index
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