/**
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
        slowPromise(),
        fastPromise(),
        slowPromise(),
    ]).then(renderValue);

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 2500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 3000);
});
