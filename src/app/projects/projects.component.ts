import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  responsiveCarousel: any = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  projectList: any = [
    {
      name: "Infosys Cloud Infrastruture Validation",
      description: "It is a platform that helps conduct Azure cloud readiness and non-functional validation for a cloud platform build using open-source technology and pre-configured templates and custom scripting"
    },
    {
      name: "Infosys Open Bank API Testing",
      description: "A platform that performs functional testing, load testing and security testing on Open Banking APIs, using open-source software and generates excel and graph reports."
    },
    {
      name: "Infosys Blockchain Testing",
      description: "Combination of different POCs, different blockchain technologies are validated for transactions and smart contracts. I have worked on Multichain, Ethereum and Corda as part of this solution"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
