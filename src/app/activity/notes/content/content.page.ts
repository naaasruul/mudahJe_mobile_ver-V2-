import { Component, OnInit } from '@angular/core';

import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  items = [
    { id: 1, content: 'Item 1 content', imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { id: 2, content: 'Item 2 content', imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { id: 3, content: 'Item 3 content', imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png' }
    // Add more items as needed
  ];
  currentIndex = 0;

  

  contentId: string = '';

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params =>{
      const id = params.get('contentId');

      this.contentId = id ? id : ''

      this.currentIndex = parseInt(this.contentId) - 1 
      console.log(this.contentId)
    })
  }

  nextBtn(){
    this.currentIndex = this.currentIndex + 1;

    if (this.currentIndex >= this.items.length) {
      this.currentIndex = 0; // Reset to the first item or handle the error
      console.error('Reached the end of the items list, resetting to the first item.');
    }
  }

}
