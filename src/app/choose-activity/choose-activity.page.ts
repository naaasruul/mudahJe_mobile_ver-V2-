import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // add router 1st, bila import kena update constructor.
                                                  // masukkan dalam bracket instead of curly bracket
@Component({
  selector: 'app-choose-activity',
  templateUrl: './choose-activity.page.html',
  styleUrls: ['./choose-activity.page.scss'],
})
export class ChooseActivityPage implements OnInit {
  activityId: string = '';
  type: string = '';
  level: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('activityId');
      this.activityId = id ? id : ''; // Fallback to empty string if null

      console.log(id)
    })
  }

}
