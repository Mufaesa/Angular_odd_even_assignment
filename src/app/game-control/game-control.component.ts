import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameCounterChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() stopGameTrigger: EventEmitter<number> = new EventEmitter<number>();
  @Output() gameStatusTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();
  gameIsPlaying: boolean = false;
  gameCounter: number = 0;
  counterInterval: NodeJS.Timeout | undefined; 


  startGame(){
    this.gameStatusTrigger.emit(true);
    // this.gameCounter = newCounter;
    console.log("game start btn pressed");
    this.counterInterval = setInterval(() => this.startCounter(), 1000);
  }

  startCounter(){
    // console.log(this.gameCounter);
    this.gameCounterChange.emit(this.gameCounter);
    this.gameCounter += 1;
  }
  
  stopGame(){
    this.gameStatusTrigger.emit(false);
    if (this.counterInterval) {
      clearInterval(this.counterInterval); // Clear the interval if it exists
      this.counterInterval = undefined; // Reset the interval property
      this.stopGameTrigger.emit();
    }
  }
  
}
