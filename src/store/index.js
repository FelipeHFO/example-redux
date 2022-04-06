// createStore irá criar a árvore de estados que será somente atualizada através
// da função dispatch
import { createStore } from 'redux';

// Por padrão ele irá importar o arquivo index.js contendo nosso
// combineReducers com todos os reducers que passamos a ele
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
