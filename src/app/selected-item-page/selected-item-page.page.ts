import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';


@Component({
  selector: 'app-selected-item-page',
  templateUrl: './selected-item-page.page.html',
  styleUrls: ['./selected-item-page.page.scss'],
})
export class SelectedItemPagePage implements OnInit {
  selectedItemDetails: any[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params['selectedItems']) {
        this.selectedItemDetails = JSON.parse(params['selectedItems']);
      }
    });
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }

  goToNextItem() {
    if (this.currentIndex < this.selectedItemDetails.length - 1) {
      this.currentIndex++;
    }
  }

  goHome() {
    this.router.navigate(['/index']); // Replace '/home' with the actual route for your home page
  }
}
