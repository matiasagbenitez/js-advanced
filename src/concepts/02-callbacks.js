import { heroes } from '../data/heroes.js';

// CALLBACK
/**
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const callbacksComponent = (element) => {

    const id = '5d86371f97c29d020f1e1f6d';

    findHero(id, (error, hero) => {

        // element.innerHTML = hero?.name || 'No hay héroe';

        if (error) {
            element.innerHTML = error;
            return;
        } 
        element.innerHTML = hero.name;
    });
    
}

// CALLBACK HELL
/**
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const callbackHellComponent = (element) => {

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371f233c9f2425f16916';

    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error;
            return;
        } 

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            } 

            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });
}

/**
 * @param{String} id
 * @param{(error: String|null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) {
        callback(`Hero with id ${id} not found.`);
        return;
    }
    callback(null, hero);
}