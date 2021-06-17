import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  elements = new Array(9).fill('');
  message = "Let's start the game";
  isPlaying = true;
  winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  currentPlayer = 'X';
  constructor() {}

  play(cellIndex) {
    if (this.isPlaying && this.elements[cellIndex] == '') {
      const currentPlayer = this.currentPlayer;
      this.elements[cellIndex] = currentPlayer;
      this.checkWinning();
      this.currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
      this.checkDraw();
    }
  }

  checkWinning() {
    this.winningPositions.forEach(winPos => {
      const currentGameState = this.elements;
      let a = currentGameState[winPos[0]];
      let b = currentGameState[winPos[1]];
      let c = currentGameState[winPos[2]];
      if (a != '' && a == b && b == c) {
        this.message = this.currentPlayer + ' has won';
        this.isPlaying = false;
      }
    });
  }

  restart() {
    this.elements = new Array(9).fill('');
    this.isPlaying = true;
  }

  checkDraw() {
    let isDraw = true;
    this.elements.forEach(el => {
      if (el == '') {
        isDraw = false;
      }
    });
    if (isDraw) {
      this.message = 'Game has drawed';
      this.isPlaying = false;
    }
  }
}
