/**
 * Función que renderiza el componente de entornos
 * @param {HTMLDivElement} elemento donde se va a renderizar el componente
 */
export const environmentsComponent = (element) => {

    const html = `
        Dev: ${import.meta.env.DEV} <br>
        Prod: ${import.meta.env.PROD} <br>
        KEY: ${import.meta.env.VITE_API_KEY} <br>
        URL: ${import.meta.env.VITE_BASE_URL} <br>
    `;

    element.innerHTML = html;

}