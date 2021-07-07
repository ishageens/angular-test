import { Component, OnInit } from '@angular/core';
import { Speler } from './model/speler';
import { SpelersService } from './model/spelers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spelersService: SpelersService) { }

  spelers: Speler[] = [];

  ngOnInit() {
    this.spelersService.getSpelers().subscribe(
      (spelers => {
        this.spelers = spelers;
      })
    );
  }
}
