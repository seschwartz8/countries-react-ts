import '../css/Hangman.css';
import React, { Component } from 'react';

class Hangman extends Component {
  state = {
    word: '',
    currentLetters: [],
    fails: 0
  };

  setWord(word: string): void {
    this.setState({ word: word });
  }

  get length(): number {
    let { word } = this.state;
    return word.length;
  }

  initializeLetters(): void {
    this.setState({ currentLetters: [] });
    for (let i = 0; i < this.length; i++) {
      this.setState(prevState => ({
        currentLetters: prevState.currentLetters.push('-')
      }));
    }
  }

  updateCurrentLetters(letter: string): void {
    let letterFound: boolean = false;
    for (let i = 0; i < this.length; i++) {
      if (this.state.word[i].toLowerCase() === letter.toLowerCase()) {
        this.setState(prevState => {
          prevState.currentLetters[i] = letter;
          return { currentLetters: prevState.currentLetters };
        });
        letterFound = true;
      }
    }
    if (!letterFound) {
      this.setState(prevState => ({
        fails: prevState.fails++
      }));
    }
  }

  loseCheck(): boolean {
    let { fails } = this.state;
    return fails === 10 ? true : false;
  }

  winCheck(): boolean {
    let { word, currentLetters } = this.state;
    return currentLetters.join('') === word.toLowerCase() ? true : false;
  }

  resetFails(): void {
    this.setState({ fails: 0 });
  }

  render() {
    return <div>Hangman Function</div>;
  }
}

export default Hangman;
