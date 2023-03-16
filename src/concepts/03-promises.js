import { heroes } from '../data/heroes.js';

/**
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const promiseComponent = (element) => {

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }

    // findHero(id1)
    // .then(superHero => renderHero(superHero))
    // .catch(error => renderError(error));

    // findHero(id1)
    //     .then(renderHero)
    //     .catch(renderError);

    let hero1, hero2;

    // PROMISE HELL
    // findHero(id1)
    //     .then((hero) => {
    //         hero1 = hero;
    //         findHero(id2)
    //             .then((hero) => {
    //                 hero2 = hero;
    //                 renderHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

    //! CADENA DE PROMESAS
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero => {
    //         hero2 = hero;
    //         renderHeroes(hero1, hero2);
    //     })
    //     .catch(renderError);

    // ? LO RECOMENDABLE
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderHeroes(hero1, hero2) )
    .catch(renderError);
}

/**
 * @param{String} id
 * @returns{Promise<Object>} promesa
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found.`);
    });

}