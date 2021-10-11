import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data: Array<TimelineItem> | String = [];
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  faGithub = faGithub;
  
  constructor() { }

  ngOnInit(): void {
    //Object type
    this.data = [
      {
        datetime: new Date('2021-09-03 23:59:59'),
        header: 'ISEP',
        body: [
          {
            tag: 'h1',
            content: "Licenciatura Engenharia Informática"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2020-10-08 23:59:59'),
        header: 'SharePoint Certificate',
        body: [
          {
            tag: 'h1',
            content: "SharePoint Certificate"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2018-10-22 23:59:59'),
        icon: 'home',
        header: 'ISEP',
        body: [
          {
            tag: 'h1',
            content: "Mestrado Sistemas Computacionais"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2018-10-02 23:59:59'),
        icon: 'home',
        header: 'CDM',
        body: [
          {
            tag: 'h1',
            content: "Empregado na Fundação Casa da Música"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2018-09-13 23:59:59'),
        icon: 'home',
        header: 'ISEP',
        body: [
          {
            tag: 'h1',
            content: "Fim Licenciatura Engenharia de Sistemas"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2018-06-20 23:59:59'),
        icon: 'home',
        header: 'CDM',
        body: [
          {
            tag: 'h1',
            content: "Fim Estágio na Fundação Casa da Música"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2018-03-09 23:59:59'),
        icon: 'home',
        header: 'CDM',
        body: [
          {
            tag: 'h1',
            content: "Ínicio Estágio na Fundação Casa da Música"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      },
      {
        datetime: new Date('2015-09-07 23:59:59'),
        icon: 'home',
        header: 'ISEP',
        body: [
          {
            tag: 'h1',
            content: "Ínicio Licenciatura Engenharia de Sistemas"
          },
          {
            tag: 'p',
            content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa.'
          }],
        footer: 'Sample of footer. See <a href=\"https://github.com/Albejr/ngx-timeline\" target=\"_blank\">more details</a>'
      }
    ];

  }

}
