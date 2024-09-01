  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute , Router} from '@angular/router';

  @Component({
    selector: 'app-content',
    templateUrl: './content.page.html',
    styleUrls: ['./content.page.scss'],
  })
  export class ContentPage implements OnInit {
    
    items =[
      { id: 1, category:'Ucapan', name: 'Terima Kasih',imageUrl:'assets/mp4/ucapan_terimaKasih.mp4'},
      { id: 2, category:'Ucapan', name: 'Tahniah',imageUrl:'assets/mp4/ucapan_tahniah.mp4' },
      { id: 3, category:'Ucapan', name: 'Selamat Pagi',imageUrl:'assets/mp4/ucapan_selamatPagi.mp4' },
      { id: 4, category:'Ucapan', name: 'Selamat Jalan',imageUrl:'assets/mp4/ucapan_selamatJalan.mp4' },
      { id: 5, category:'Ucapan', name: 'Selamat Datang',imageUrl:'assets/mp4/ucapan_selamatDatang.mp4' },
      { id: 6, category:'Ucapan', name: 'Sama-sama',imageUrl:'assets/mp4/ucapan_samasama.mp4' },
      { id: 7, category:'Ucapan', name: 'Maaf',imageUrl:'assets/mp4/ucapan_maaf.mp4' },
      { id: 8, category:'Ucapan', name: 'Hai',imageUrl:'assets/mp4/ucapan_hai.mp4' },
      { id: 9, category:'Ucapan', name: 'Assalammualaikum',imageUrl:'assets/mp4/ucapan_assalam.mp4' },
      { id: 1, category:'Keluarga', name: 'Bapa',imageUrl:'assets/mp4/keluarga_bapa.mp4' },
      { id: 2, category:'Keluarga', name: 'Emak',imageUrl:'assets/mp4/keluarga_emak.mp4' },
      { id: 3, category:'Keluarga', name: 'Abang',imageUrl:'assets/mp4/keluarga_abang.mp4' },      // Add more items as needed
      { id: 4, category:'Keluarga', name: 'Kakak',imageUrl:'assets/mp4/keluarga_kakak.mp4' },      // Add more items as needed
      { id: 5, category:'Keluarga', name: 'Adik Perempuan',imageUrl:'assets/mp4/keluarga_adikPerempuan.mp4' },      // Add more items as needed
      { id: 6, category:'Keluarga', name: 'Adik Lelaki',imageUrl:'assets/mp4/keluarga_adikLelaki.mp4' },      // Add more items as needed
      { id: 7, category:'Keluarga', name: 'datuk',imageUrl:'assets/mp4/keluarga_datuk.mp4' },      // Add more items as needed
      { id: 8, category:'Keluarga', name: 'Nenek',imageUrl:'assets/mp4/keluarga_Nenek.mp4' },      // Add more items as needed
    ];


  filteredItems: any[] = []; // Array to store filtered items
    currentIndex = 0;
    contentId: string = '';
    contentCategory: string = '';
    currentItem: any;


    constructor(private route: ActivatedRoute , private router: Router) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('contentId');
        const category = params.get('contentCategory');
  
        this.contentId = id ? id : '';
        this.contentCategory = category ? category : '';
  
        console.log("contentId: ", this.contentId);
        console.log("contentCategory: ", this.contentCategory);
  
        this.filteredItems = this.getFilteredItems(this.contentCategory);
        this.currentIndex = this.filteredItems.findIndex(item => item.id.toString() === this.contentId);
  
        if (this.currentIndex !== -1) {
          this.currentItem = this.filteredItems[this.currentIndex];
        } else {
          console.error('Item not found');
        }
  
        console.log(this.filteredItems);
        console.log(this.currentItem);
      });
    }
  // Method to filter items based on category
  getFilteredItems(category: string): any[] {
    return this.items.filter(item => item.category === category);
  }

  // Method to check if the URL is a video
  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }

    // nextBtn(){
    //   this.currentIndex = this.currentIndex + 1;
    
    //   if (this.currentIndex >= this.filteredItems.length) {
    //     this.currentIndex = 0; // Reset to the first item or handle the error
    //     console.error('Reached the end of the items list, resetting to the first item.');
    //   }
    //   else{
    //     console.log("adding 1 to index",this.currentIndex)
    //   }
    // }



    backBtn(pageCategory: string) {
      this.router.navigate(['notes',pageCategory]); // Adjust this to the desired route
    }
  }
