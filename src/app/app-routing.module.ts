import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPlayersComponent } from "./all-players/all-players.component";
import { PlayerDetailComponent } from "./all-players/player-detail/player-detail.component";
import { TopPlayersComponent } from "./top-players/top-players.component";

const appRoutes: Routes = [
    { path: '', component: TopPlayersComponent },
    { path: 'players', component: AllPlayersComponent },
    { path: 'players/:id', component: PlayerDetailComponent },
    { path: 'top', redirectTo: '' },
];

@NgModule({
    imports:
        [
            RouterModule.forRoot(appRoutes, { useHash: true })
        ],
    exports:
        [
            RouterModule
        ]
})

export class AppRoutingModule {

}