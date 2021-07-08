import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { SpelersService } from 'src/app/spelers.service';
import { Speler } from '../speler';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() speler: Speler;

  constructor(private spelersService: SpelersService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spelersService.getSpeler(id).subscribe(speler => this.speler = speler);

  }
  onBack() {
    this.location.back();
  }

  onSave() {
    this.spelersService.updateSpeler(this.speler).subscribe(() => this.location.back());
  }
}
