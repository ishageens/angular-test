import { Speler } from "./model/speler";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const spelers: Speler[] = [
            {
                id: 11,
                name: 'Andy Murray',
                country: 'United States',
                age: 29,
                points: 11540,
                tournamentsPlayed: 17
            },
            {
                id: 12,
                name: 'Novak Djokovic',
                country: 'Serbia',
                age: 29,
                points: 9735,
                tournamentsPlayed: 16
            },
            {
                id: 13,
                name: 'Stan Wawrinkas',
                country: 'Suisse',
                age: 31,
                points: 5195,
                tournamentsPlayed: 19
            },
            {
                id: 14,
                name: 'Milos Raonic',
                country: 'Canada',
                age: 26,
                points: 5080,
                tournamentsPlayed: 20
            },
            {
                id: 15,
                name: 'Kei Nishikiro',
                country: 'Japan',
                age: 27,
                points: 4730,
                tournamentsPlayed: 20
            }
        ];
        return spelers;
    }
}