import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute,Router  } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router // Inject the Router service
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
    if (topic === 'Ucapan') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/greeting
      filteredQuestions = [
        {
          id: 1,
          question: '',
          mediaUrl: 'assets/mp4/ucapan_terimaKasih.mp4',
          options: ['Assalammualaikum', 'Apa Khabar?', 'Terima Kasih'],
          correctAnswer: 2
        },  
        {
          id: 2,
          question: "",
          mediaUrl: "assets/mp4/ucapan_tahniah.mp4",
          options: ['Assalammualaikum','Tahniah', 'Terima Kasih'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "",
          mediaUrl: "assets/mp4/ucapan_selamatPagi.mp4",
          options: ['Selamat Pagi', 'Selamat Malam', 'Selamat Petang'],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "",
          mediaUrl: "assets/mp4/ucapan_selamatJalan.mp4",
          options: ['Selamat Jalan', 'Assalammualaikum', 'Apa Khabar?'],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "",
          mediaUrl: "assets/mp4/ucapan_selamatDatang.mp4",
          options: ['Sama-sama', 'Selamat Datang', 'Hi '],
          correctAnswer: 1
        }
      ];
    } else if (topic === 'Keluarga') { // TOPIC MUST BE EQUAL TO THE ONE SHOWN IN THE URL EG:- /exercise/family
      filteredQuestions = [
        {
          id: 1,
          question: '',
          mediaUrl: 'assets/mp4/keluarga_emak.mp4',
          options: ['Emak', 'Bapa', 'Abang'],
          correctAnswer: 0 // index
        },
        {
          id: 2,
          question: '',
          mediaUrl: 'assets/mp4/keluarga_abang.mp4',
          options: ['Bapa', 'Emak', 'Abang'],
          correctAnswer: 2 // index
        },
        {
          id: 3,
          question: 'Which planet is known as the Red Planet?',
          mediaUrl: 'assets/mp4/keluarga_bapa.mp4',
          options: ['Emak', 'Bapa', 'Abang'],
          correctAnswer: 1// index
        },
        {
          id: 4,
          question: 'Which planet is known as the Red Planet?',
          mediaUrl: 'assets/mp4/keluarga_adikPerempuan.mp4',
          options: ['Adik Perempuan', 'Adik Lelaki', 'Abang'],
          correctAnswer: 0 // index
        },
        {
          id: 5,
          question: 'Which planet is known as the Red Planet?',
          mediaUrl: 'assets/mp4/keluarga_adikLelaki.mp4',
          options: ['Kakak', 'Adik Perempuan', 'Adik Lelaki'],
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
    if (this.currentIndex + 1 < this.questions.length) {
      this.currentIndex++;
      this.currentQuestion = this.questions[this.currentIndex];
      this.selectedOptionIndex = null; // Reset the selected option
    } else {
      this.route.paramMap.subscribe(params => {
        this.selectedOptionIndex = null; // Reset the selected option
        const topic = params.get('topic') || 'default'; // Provide a default value if topic is null
        this.router.navigate(['choose-activity/',topic]); // Navigate to the previous page
      });
    }
  }

  selectOption(index: number) {
    this.selectedOptionIndex = index;
    const customEvent = new CustomEvent('ionChange', {
      detail: { value: index }
    });
    this.selectAnswer(customEvent);
  }
}