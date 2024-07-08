  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute , Router} from '@angular/router';

  @Component({
    selector: 'app-content',
    templateUrl: './content.page.html',
    styleUrls: ['./content.page.scss'],
  })
  export class ContentPage implements OnInit {

    items =[
      { id: 1, category:'greeting', name: 'Assalammualaikum',imageUrl:'assets/videobahasaisyarat_mp4/Assalamualaikum.mp4'},
      { id: 2, category:'greeting', name: 'Apa Khabar?',imageUrl:'assets/videobahasaisyarat_mp4/apaKhabar.mp4' },
      { id: 3, category:'greeting', name: 'Terima Kasih',imageUrl:'assets/videobahasaisyarat_mp4/terimaKasih.mp4' },
      { id: 1, category:'family', name: 'Bapa',imageUrl:'assets/videobahasaisyarat_mp4/Bapa.mp4' },
      { id: 2, category:'family', name: 'Emak',imageUrl:'assets/videobahasaisyarat_mp4/Emak.mp4' },
      { id: 3, category:'family', name: 'Abang',imageUrl:'assets/videobahasaisyarat_mp4/Abang.mp4' },      // Add more items as needed
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
