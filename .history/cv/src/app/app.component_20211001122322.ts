import { Component } from '@angular/core';
import { Container, Main } from 'ng-particles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cv';

  
  id = "tsparticles";
    
  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "https://particles.js.org/samples/presets/links.json";

  options = {
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#1c2140","#524b41","#877442", "#bd9e43", "#f2c744"]
      },
      links: {
        enable: true,
        color: "#000"
      },
      move: {
        enable: true
      }
    }
  };
  
   constructor() { }

    particlesLoaded(container: Container): void {
      console.log(container);
    }

    particlesInit(main: Main): void {
        console.log(main);
        
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }
}
