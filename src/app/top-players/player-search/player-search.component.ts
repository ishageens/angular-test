import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Speler } from 'src/app/all-players/speler';
import { SpelersService } from 'src/app/spelers.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})

export class PlayerSearchComponent implements OnInit {
  spelers$: Observable<Speler[]>;

  private zoekString = new Subject<string>();

  constructor(private spelersService: SpelersService) { }
  zoek(term: string): void {
    this.zoekString.next(term);
  }

  ngOnInit() {
    this.spelers$ = this.zoekString.pipe(
      // wacht 300 ms na elke toetsaanslag 
      debounceTime(300),
      // negeer als de term hetzelfde is de vorige 
      distinctUntilChanged(),
      // switch naar een nieuwe observable elke keer de term verandert 
      switchMap((term: string) => this.spelersService.searchSpeler(term)));
  }
}
