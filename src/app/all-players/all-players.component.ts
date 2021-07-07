import { Component, OnInit } from '@angular/core';
import { Speler } from './speler';
import { SpelersService } from '../spelers.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  constructor(private spelersService: SpelersService) { }

  spelers: Speler[] = [];

  ngOnInit() {
    this.spelersService.getSpelers().subscribe(spelers => this.spelers = spelers);
  }

}
