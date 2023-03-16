import { heroes } from "../data/heroes";

/**
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const generatorsAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break;
        element.innerHTML = value;
    } while (!isFinished)

}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}