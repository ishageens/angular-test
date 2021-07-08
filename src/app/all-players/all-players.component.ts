import { Component, OnInit } from '@angular/core';
import { Speler } from './speler';
import { SpelersService } from '../spelers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
  toggled = false;

  constructor(private spelersService: SpelersService, private route: ActivatedRoute, private router: Router) { }

  spelers: Speler[] = [];

  ngOnInit() {
    this.spelersService.getSpelers().subscribe(spelers => this.spelers = spelers);
  }

  onDelete(speler: Speler) {
    this.spelers = this.spelers.filter(s => s !== speler);
    this.spelersService.deleteSpeler(speler).subscribe();
  }

  onClick(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  onToggle() {
    this.toggled = !this.toggled;
  }

}
