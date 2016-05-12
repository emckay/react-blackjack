// app/reducer.js

import { Map } from 'immutable';

import { newDeck, deal } from './lib/cards.js';

const setupGame = (currentState) => {
    let deck = newDeck();
    let playerHand, dealerHand;
    
    [deck, playerHand] = deal(deck, 2);
    [deck, dealerHand] = deal(deck, 1);
    
    dealerHand = dealerHand.push(new Map());
    
    const newState = new Map({ deck, playerHand, dealerHand });
  
    return currentState.merge(newState);
};

export default function(currentState=new Map(), action) {
    switch(action.type) {
        case 'SETUP_GAME':
            return setupGame(currentState);
    }
    return currentState;
}