import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './src/concepts/01-environments';
import { callbacksComponent, callbackHellComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promises';
import { promiseRaceComponent } from './src/concepts/04-promise-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-async-await';
import { asyncAwait2Component } from './src/concepts/07-async-await';
import { forAwaitComponent } from './src/concepts/08-for-wait';
import { generatorFunctionsComponent } from './src/concepts/09-generators';
import { generatorsAsyncComponent } from './src/concepts/10-generators-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    
    </div>
  </div>
`;

const element = document.querySelector('.card');

// * VARIABLES DE ENTORNO
// environmentsComponent(element);

// * CALLBACKS
// callbacksComponent(element);
// callbackHellComponent(element);

// * PROMISES
// promiseComponent(element);
// promiseRaceComponent(element);

// * ASYNC
// asyncComponent(element);

// * ASYNC AWAIT
// asyncAwaitComponent(element);
// asyncAwait2Component(element);

// * FOR AWAIT
// forAwaitComponent(element);

// * FUNCIONES GENERADORAS
// generatorFunctionsComponent(element);
generatorsAsyncComponent(element);
