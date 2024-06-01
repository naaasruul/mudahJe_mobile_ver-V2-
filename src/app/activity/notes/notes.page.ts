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

  activities = [
    { id: 1, name: 'Activity 1' },
    { id: 2, name: 'Activity 2' },
    { id: 3, name: 'Activity 3' },
    { id: 4, name: 'Activity 4' },
    // Add more activities as needed
  ];

  content = [
    { id: 1, name: '1'},
    { id: 2, name: '2'},
    { id: 3, name: '3'},
    { id: 4, name: '4'},
    { id: 5, name: '5'},
    { id: 6, name: '6'},
    { id: 7, name: '7'},
    { id: 8, name: '8'},
    { id: 9, name: '9'},
    { id: 10, name:'10'},
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('activityId');
      this.activityId = id ? id : ''; // Fallback to empty string if null

      console.log(id)
    })
  }

}
