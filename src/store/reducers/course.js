const INITIAL_STATE = {
  activeLesson: '',
  activeModule: '',
  modules: [
    {
      id: 1,
      title: 'Introdução',
      lessons: [
        {
          id: 1,
          title: 'Adicione o React a um site',
        },
        {
          id: 2,
          title: 'Crie um novo React App',
        },
      ]
    },
    {
      id: 2,
      title: 'Principais conceitos',
      lessons: [
        {
          id: 3,
          title: 'Hello World',
        },
        {
          id: 4,
          title: 'Introduzindo JSX',
        },
      ]
    }
  ]
};

export default function courseReducer(state = INITIAL_STATE, action) {  
  if(action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson,
    }
  }

  return state;
}