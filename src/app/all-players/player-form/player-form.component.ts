import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpelersService } from 'src/app/spelers.service';
import { Speler } from '../speler';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  spelers: Speler[] = [];

  ngOnInit() {
    this.spelersService.getSpelers().subscribe(spelers => this.spelers = spelers);
  }

  @ViewChild('f') addform: NgForm

  constructor(private spelersService: SpelersService) { }

  nieuweSpeler = {} as Speler;


  onSubmit() {
    this.nieuweSpeler.name = this.addform.value.name;
    this.nieuweSpeler.country = this.addform.value.country;
    this.nieuweSpeler.age = this.addform.value.age;
    this.nieuweSpeler.points = this.addform.value.points;
    this.nieuweSpeler.tournamentsPlayed = this.addform.value.tPlayed;

    this.spelersService.addSpeler(this.nieuweSpeler)
      .subscribe(speler => {
        this.spelers.push(speler);
      });
    this.addform.reset();
    this.spelersService.getSpelers().subscribe(spelers => this.spelers = spelers);

  }

}
