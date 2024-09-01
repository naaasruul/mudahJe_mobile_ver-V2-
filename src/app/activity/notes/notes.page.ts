import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // add router 1st, bila import kena update constructor.
                                                  // masukkan dalam bracket instead of curly bracket

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  
  activityId: string = '';
  type: string = '';
  level: string = '';
  category: string = ''; // Add a category property to store the current category


  activities = [
    { id: 1, category:'Ucapan', name: 'Terima Kasih' },
    { id: 2, category:'Ucapan', name: 'Tahniah' },
    { id: 3, category:'Ucapan', name: 'Selamat Pagi' },
    { id: 4, category:'Ucapan', name: 'Selamat Jalan' },
    { id: 5, category:'Ucapan', name: 'Selamat Datang' },
    { id: 6, category:'Ucapan', name: 'Sama-sama' },
    { id: 7, category:'Ucapan', name: 'Maaf' },
    { id: 8, category:'Ucapan', name: 'Hai' },
    { id: 9, category:'Ucapan', name: 'Assalammualaikum' },
    { id: 1, category:'Keluarga', name: 'Bapa' },
    { id: 2, category:'Keluarga', name: 'Emak' },
    { id: 3, category:'Keluarga', name: 'Nenek' },    // Add more activities as needed
    { id: 4, category:'Keluarga', name: 'Kakak' },    // Add more activities as needed
    { id: 5, category:'Keluarga', name: 'Abang' },    // Add more activities as needed
    { id: 6, category:'Keluarga', name: 'Adik Perempuan' },    // Add more activities as needed
    { id: 7, category:'Keluarga', name: 'Adik Lelaki' },    // Add more activities as needed
    { id: 8, category:'Keluarga', name: 'Datuk' },    // Add more activities as needed
  ];
  
  // Explicitly declare the type of filteredActivities
  filteredActivities: { id: number; category: string; name: string; }[] = [];

  constructor(private route: ActivatedRoute) { }

    ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // const id = params.get('activityId');
      const category = params.get('activityId'); // Get the category from the route parameters
      // this.activityId = id ? id : ''; // Fallback to empty string if null
      this.category = category ? category : ''; // Fallback to empty string if null

      // console.log('Activity ID:', id);
      console.log('Category:', category);

      this.filterActivitiesByCategory();
    });
  }



  
  filterActivitiesByCategory() {
    // Filter activities based on the category specified in the route parameters
    if (this.category) {
      this.filteredActivities = this.activities.filter(activity => activity.category === this.category);
    } else {
      this.filteredActivities = []; // Reset filtered activities if no category is specified
    }
    console.log('Filtered Activities:', this.filteredActivities);
  }



}
