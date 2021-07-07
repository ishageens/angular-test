import { Component, OnDestroy, OnInit } from '@angular/core';
import { Speler } from '../all-players/speler';
import { SpelersService } from '../spelers.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  constructor(private spelersService: SpelersService) { }

  spelers: Speler[] = [];

  ngOnInit() {
    this.spelersService.getSpelers().subscribe(spelers => this.spelers = spelers.slice(0, 3));
  }
}
