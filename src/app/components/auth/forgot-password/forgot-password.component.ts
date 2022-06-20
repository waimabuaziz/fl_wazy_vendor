import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  owlcarousel = [
    {
      title: "WazyTools",
      desc: "Vendor Panel",
    },
    {
      title: "WazyTools",
      desc: "Vendor Panel",
    },
    {
      title: "Welcome to WazyTools",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
