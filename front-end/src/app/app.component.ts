import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Mauro Aguilar';
  skills = [
    'Javascript',
    'Angular',
    'Game Development',
    'E-Learning Products Development',
    'OOP Mindset',
    'Functional Programming',
    'Relational DB Modelling',
    'Agile Methodologies | SCRUM',
    'Algorithms',
    'CSS3',
    'HTML5',
    'Pixi.js',
    'Phaser',
    'SASS',
    'Git',
    'Three.js',
    'Typescript',
    'Rxjs',
    'Redux',
    'Backbone.js',
    'jQuery',
    'Nodejs',
    'MongoDB',
    'PHP',
  ];
  skillsSummarized: boolean = true;

  getSkills() {
    return this.skillsSummarized ? this.skills.slice(0, 5) : this.skills;
  }

  toggleSkills() {
    this.skillsSummarized = !this.skillsSummarized;
  }
}
