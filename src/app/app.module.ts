import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { TopPlayersComponent } from './top-players/top-players.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { PlayerDetailComponent } from './all-players/player-detail/player-detail.component';
import { PlayerFormComponent } from './all-players/player-form/player-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerSearchComponent } from './top-players/player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPlayersComponent,
    AllPlayersComponent,
    PlayerDetailComponent,
    PlayerFormComponent,
    PlayerSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
