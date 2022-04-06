// combineReducers irá criar um objeto contendo todos os reducers que deseja
import { combineReducers } from 'redux';

// importando o reducer do Curso
import courseReducer from './course';

export default combineReducers({
  course: courseReducer,
});
