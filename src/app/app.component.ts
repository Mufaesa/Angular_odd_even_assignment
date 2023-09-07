import { Component } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_4_game';
  gameState: boolean = false;
  currentCounter: number = 0;
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onStopGame(){
    this.gameState = false;
  }

  handleGameCounterChange(newCounter: number) {
    // This method will be called when the gameCounter changes in the child component
    if(this.currentCounter % 2 === 0){
      this.evenNumbers.push(this.currentCounter);
    } else {
      this.oddNumbers.push(this.currentCounter);
    }
    this.currentCounter = newCounter;
  }

  updatePlayingStatus(currentState: boolean){
    this.gameState = currentState;
  }

}
