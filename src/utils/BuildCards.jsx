import shuffle from 'lodash.shuffle';
import Font from './Font';
const NUMBER_CARDS = 20;

export default () => {
    const character = Font();
    let cartas = [];

    while (cartas.length < NUMBER_CARDS){
        const index = Math.floor(Math.random() * character.length);
        const card = {
            icono: character.splice(index, 1)[0],
            fueadivinada: false
        };

        cartas.push(card);
        cartas.push({...card});
        
    }

    return shuffle(cartas);
};