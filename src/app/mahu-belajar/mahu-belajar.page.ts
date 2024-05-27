import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Router } from '@angular/router';

interface Fruit {
  name: string;
  img: string;
  details: string;
}

@Component({
  selector: 'app-mahu-belajar',
  templateUrl: './mahu-belajar.page.html',
  styleUrls: ['./mahu-belajar.page.scss'],
})
export class MahuBelajarPage implements OnInit {
  
  items: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  filteredItems: string[] = [];
  searchQuery: string = '';
  selectedItems: string[] = [];
  selectedItemsDisplay: SafeHtml | null = null;

  currentIndex: number = 0;

  selectedItemDetails: Fruit[] = [];
  fruits: Fruit[] = [
    { name: 'Apple', img: 'assets/fruitsImg/apple.png', details: 'An apple a day keeps the doctor away.' },
    { name: 'Banana', img: 'assets/fruitsImg/banana.jpg', details: 'lorem' },
    { name: 'Orange', img: 'assets/fruitsImg/orange.webp', details: 'Bananas are rich in potassium.' },
    { name: 'Pineapple', img: 'assets/fruitsImg/pineapple.jpg', details: 'Bananas are rich in potassium.' },
    { name: 'Mango', img: 'assets/fruitsImg/Mango.jpg', details: 'Bananas are rich in potassium.' },
    // Add more fruits as needed
  ];



  constructor(
    private menuCtrl: MenuController,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.filteredItems = this.items;
   }

   
  ngOnInit() {
    this.openSearchMenu()
  }
  openSearchMenu() {
    this.menuCtrl.open('search-menu');
  }
  filterItems() {
    this.filteredItems = this.items.filter((item) => {
      return item.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
    });
  }

  selectItems(item: string) {
    // Check if item already exists in selectedItemss array
    if (!this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
      // Rebuild the selectedItemssDisplay using ion-chip elements
      const chips = this.selectedItems.map(selected => `<ion-chip outline="true">${selected}</ion-chip>`).join('');
      // Sanitize the HTML before assigning it
      this.selectedItemsDisplay = this.sanitizer.bypassSecurityTrustHtml(chips);
    }
  }
  


  goToNextItem() {
    if (this.selectedItemDetails.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.selectedItemDetails.length;
    }
  }


  submitSelectedItems() {
    console.log('Selected Items:', this.selectedItems);
    this.selectedItemDetails = this.selectedItems.map(fruitName => {
      const fruit = this.fruits.find(fruit => fruit.name === fruitName);
      if (fruit) {
        return fruit;
      } else {
        return { name: fruitName, img: '', details: 'Details not available' };
      }
    });
    console.log('Selected Item Details:', this.selectedItemDetails);
    this.currentIndex = 0; // Reset to the first item

      // Navigate to the next page with the selected item details as a parameter
    this.router.navigate(['/selected-item-page'], {
    queryParams: { selectedItems: JSON.stringify(this.selectedItemDetails) }
  });
  }
  
  
}
