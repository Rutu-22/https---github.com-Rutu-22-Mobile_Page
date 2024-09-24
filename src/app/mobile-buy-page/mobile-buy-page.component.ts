import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-buy-page',
  templateUrl: './mobile-buy-page.component.html',
  styleUrls: ['./mobile-buy-page.component.css']
})
export class MobileBuyPageComponent {
  mobile = {
    name: "Vivo V30e - 128 GB Storage, Velvet Red (8 GB RAM)",
    price: "No Cost EMI Starts From ₹1,999/month",
    imageUrl: "assets/vivo-v30e.png",
    features: [
      "128 GB Storage, Expandable up to 512 GB",
      "8 GB RAM for smooth multitasking",
      "Super AMOLED Display",
      "64 MP Primary Camera, 32 MP Selfie Camera",
      "4500mAh Battery with Fast Charging"
    ]
  };
}
