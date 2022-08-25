import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  windowWidth: any = window.innerWidth
  // headings: any = ["Home", "About", "Projects"]
  headings:any = [
    {icon: 'fa fa-home fa-lg', value: 'Home'},
    {icon: 'fa fa-id-badge fa-lg', value: 'About'},
    {icon: 'fa fa-file-code-o fa-lg', value: 'Projects'}
  ]

  constructor() {
    window.addEventListener('resize', (event) => {
      this.windowWidth = window.innerWidth
    })
  }

  ngOnInit() {
    this.randomLoc()
  }

  randomLoc() {
    var rootValues = document.querySelector(':root') as HTMLInputElement
    const small = [];
    const med = [];
    const h = window.screen.width * window.devicePixelRatio
    const w = window.screen.height * window.devicePixelRatio
    const k = (Math.sqrt(h ** 2 + w ** 2))/2
    for (let i = 0; i < 200; i++) {
      if (i <= 75) {
        med.push(`${Math.ceil(Math.random() * k)}px ${Math.ceil(Math.random() * k)}px #FFF`)
        med.push(`-${Math.ceil(Math.random() * k)}px ${Math.ceil(Math.random() * k)}px #FFF`)
        med.push(`${Math.ceil(Math.random() * k)}px -${Math.ceil(Math.random() * k)}px #FFF`)
        med.push(`-${Math.ceil(Math.random() * k)}px -${Math.ceil(Math.random() * k)}px #FFF`)
      }
      small.push(`${Math.ceil(Math.random() * k)}px ${Math.ceil(Math.random() * k)}px #FFF`)
      small.push(`-${Math.ceil(Math.random() * k)}px ${Math.ceil(Math.random() * k)}px #FFF`)
      small.push(`${Math.ceil(Math.random() * k)}px -${Math.ceil(Math.random() * k)}px #FFF`)
      small.push(`-${Math.ceil(Math.random() * k)}px -${Math.ceil(Math.random() * k)}px #FFF`)
    }
    rootValues.style.setProperty('--small-stars', small.toString())
    rootValues.style.setProperty('--med-stars', med.toString())
  }
}
