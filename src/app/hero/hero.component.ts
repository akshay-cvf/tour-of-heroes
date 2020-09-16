import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mock-heroes';
import {Hero} from '../hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero : Hero = {
    id:1,
    name:'Wolfman'
  };
  heroes = HEROES;
  currentHero : Hero;

  constructor() { }

  ngOnInit(): void {
  }
  Onclick(hero : Hero):void {
    this.currentHero= hero;
  }

}
