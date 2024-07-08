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
  items: string[] = [
    'Saya',
    'Awak',
    'Anda',
    'Kamu',
    'Khabar Baik',
    'Assalammualaikum',
    'Apa Khabar?',
    'Terima Kasih',
    'Sama-sama',
    'Selamat Hari Jadi',
    'Tahniah',
    'Bapa',
    'Emak',
    'Abang',
    'Kakak',
  ];
  filteredItems: string[] = [];
  searchQuery: string = '';
  selectedItems: string[] = [];
  selectedItemsDisplay: SafeHtml | null = null;
  currentIndex: number = 0;
  selectedItemDetails: Fruit[] = [];
  fruits: Fruit[] = [
    {
      name: 'Saya',
      img: 'assets/videobahasaisyarat_mp4/Saya.mp4',
      details: '',
    },
    {
      name: 'Awak',
      img: 'assets/videobahasaisyarat_mp4/Awak.mp4',
      details: '',
    },
    {
      name: 'Anda',
      img: 'assets/videobahasaisyarat_mp4/Anda.mp4',
      details: '',
    },
    {
      name: 'Kamu',
      img: 'assets/videobahasaisyarat_mp4/Kamu.mp4',
      details: '',
    },
    {
      name: 'Khabar Baik',
      img: 'assets/videobahasaisyarat_mp4/khabarBaik.mp4',
      details: '',
    },
    {
      name: 'Assalammualaikum',
      img: 'assets/videobahasaisyarat_mp4/Assalamualaikum.mp4',
      details: '',
    },
    {
      name: 'Apa Khabar?',
      img: 'assets/videobahasaisyarat_mp4/apaKhabar.mp4',
      details: '',
    },
    {
      name: 'Terima Kasih',
      img: 'assets/videobahasaisyarat_mp4/terimaKasih.mp4',
      details: '.',
    },
    {
      name: 'Sama-sama',
      img: 'assets/videobahasaisyarat_mp4/Sama-sama.mp4',
      details: '.',
    },
    {
      name: 'Selamat Hari Jadi',
      img: 'assets/videobahasaisyarat_mp4/selamatHariJadi.mp4',
      details: '.',
    },
    {
      name: 'Tahniah',
      img: 'assets/videobahasaisyarat_mp4/Tahniah.mp4',
      details: '.',
    },
    {
      name: 'Bapa',
      img: 'assets/videobahasaisyarat_mp4/Bapa.mp4',
      details: '',
    },
    {
      name: 'Emak',
      img: 'assets/videobahasaisyarat_mp4/Emak.mp4',
      details: '',
    },
    {
      name: 'Abang',
      img: 'assets/videobahasaisyarat_mp4/Abang.mp4',
      details: '',
    },
    {
      name: 'Kakak',
      img: 'assets/videobahasaisyarat_mp4/Kakak.mp4',
      details: '',
    },
  ];

  constructor(
    private menuCtrl: MenuController,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.filteredItems = this.items;
  }

  ngOnInit() {
    this.openSearchMenu();
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
    const itemIndex = this.selectedItems.indexOf(item);
    if (itemIndex === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(itemIndex, 1);
    }
    this.updateSelectedItemsDisplay();
  }

  updateSelectedItemsDisplay() {
    const chips = this.selectedItems
      .map(
        (selected) =>
          `<ion-chip outline="true" (click)="removeItem('${selected}')">${selected}</ion-chip>`
      )
      .join('');
    this.selectedItemsDisplay = this.sanitizer.bypassSecurityTrustHtml(chips);
  }

  removeItem(item: string) {
    const itemIndex = this.selectedItems.indexOf(item);
    if (itemIndex !== -1) {
      this.selectedItems.splice(itemIndex, 1);
      this.updateSelectedItemsDisplay();
    }
  }

  isSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }

  goToNextItem() {
    if (this.selectedItemDetails.length > 0) {
      this.currentIndex =
        (this.currentIndex + 1) % this.selectedItemDetails.length;
    }
  }

  submitSelectedItems() {
    console.log('Selected Items:', this.selectedItems);
    this.selectedItemDetails = this.selectedItems.map((fruitName) => {
      const fruit = this.fruits.find((fruit) => fruit.name === fruitName);
      if (fruit) {
        return fruit;
      } else {
        return { name: fruitName, img: '', details: 'Details not available' };
      }
    });
    console.log('Selected Item Details:', this.selectedItemDetails);
    this.currentIndex = 0;

    this.router.navigate(['/selected-item-page'], {
      queryParams: { selectedItems: JSON.stringify(this.selectedItemDetails) },
    });
  }
}
