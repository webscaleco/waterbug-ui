import { Component, Input } from 'angular2/core';
import { RaceService } from '../race.service/race.service';

@Component({
    selector: 'rower',
    templateUrl: 'app/rower.component/rower.component.html',
    styleUrls: ['app/rower.component/rower.component.css']
})
export class RowerComponent {
    @Input() public rower: any;
    private socket;
    
    constructor(private raceService: RaceService) {
    }
}