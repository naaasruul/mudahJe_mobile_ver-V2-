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
    'Sayang',
    'Kawan',
    'Kamu',
    'Tolong',
    'Terima Kasih',
    'Tahniah',
    'Selamat Pagi',
    'Selamat Jalan',
    'Selamat Datang',
    'Sama-sama',
    'Maaf',
    'Hai',
    'Nenek',
    'Kakak',
    'Emak',
    'Datuk',
    'Bapa',
    'Adik Perempuan',
    'Adik Lelaki',
    'Abang',
    // 'Tebuan Attack',
  ];
  filteredItems: string[] = [];
  searchQuery: string = '';
  selectedItems: string[] = [];
  selectedItemsDisplay: SafeHtml | null = null;
  currentIndex: number = 0;
  selectedItemDetails: Fruit[] = [];
  fruits: Fruit[] = [
    {
      name: 'Tolong',
      img: 'assets/mp4/kataTolong_tolong.mp4',
      details: '',
    },
    {
      name: 'Sayang',
      img: 'assets/mp4/kataNama_sayang.mp4',
      details: '',
    },
    {
      name: 'Saya',
      img: 'assets/mp4/kataNama_saya.mp4',
      details: '',
    },
    {
      name: 'Kawan',
      img: 'assets/mp4/kataNama_kawan.mp4',
      details: '',
    },
    {
      name: 'Kamu',
      img: 'assets/mp4/kataNama_kamu.mp4',
      details: '',
    },
    {
      name: 'Awak',
      img: 'assets/mp4/kataNama_awak.mp4',
      details: '',
    },
    {
      name: 'Nenek',
      img: 'assets/mp4/keluarga_nenek.mp4',
      details: '',
    },
    {
      name: 'Kakak',
      img: 'assets/mp4/keluarga_kakak.mp4',
      details: '.',
    },
    {
      name: 'Emak ',
      img: 'assets/mp4/keluarga_emak.mp4',
      details: '.',
    },
    {
      name: 'Datuk',
      img: 'assets/mp4/keluarga_datuk.mp4',
      details: '.',
    },
    {
      name: 'Bapa',
      img: 'assets/mp4/keluarga_bapa.mp4',
      details: '.',
    },
    {
      name: 'Adik Perempuan',
      img: 'assets/mp4/keluarga_adikPerempuan.mp4',
      details: '',
    },
    {
      name: 'Adik Lelaki',
      img: 'assets/mp4/keluarga_adikLelaki.mp4',
      details: '',
    },
    {
      name: 'Abang',
      img: 'assets/mp4/keluarga_abang.mp4',
      details: '',
    },
    {
      name: 'Terima Kasih',
      img: 'assets/mp4/ucapan_terimaKasih.mp4',
      details: '',
    },
    {
      name: 'Tahniah',
      img: 'assets/mp4/ucapan_tahniah.mp4',
      details: '',
    },
    {
      name: 'Abang',
      img: 'assets/mp4/keluarga_abang.mp4',
      details: '',
    },
    {
      name: 'Selamat Pagi',
      img: 'assets/mp4/ucapan_selamatPagi.mp4',
      details: '',
    },
    {
      name: 'Selamat Jalan',
      img: 'assets/mp4/ucapan_selamatJalan.mp4',
      details: '',
    },
    {
      name: 'Selamat Datang',
      img: 'assets/mp4/ucapan_selamatDatang.mp4',
      details: '',
    },
    {
      name: 'Sama-sama',
      img: 'assets/mp4/ucapan_samasama.mp4',
      details: '',
    },
    {
      name: 'Maaf',
      img: 'assets/mp4/ucapan_maaf.mp4',
      details: '',
    },
    {
      name: 'Hai',
      img: 'assets/mp4/ucapan_hai.mp4',
      details: '',
    },
    {
      name: 'Assalammualaikum',
      img: 'assets/mp4/ucapan_assalam.mp4',
      details: '',
    },
    // {
    //   name: 'Tebuan Attack',
    //   img: 'assets/mp4/tebuan.mp4',
    //   details: '',
    // }
    
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
