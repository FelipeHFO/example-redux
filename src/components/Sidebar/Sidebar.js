// Connect é responsável por compartilhar os dados da store
import { connect } from 'react-redux';

// importações assim somente são possíveis sem o 'default' na hora de exportar
import * as CourseActions from '../../store/actions/course';

import styles from './Sidebar.module.css';

// Estas props são retornadas pelo High Order Components do connect.
// O primeiro parâmetro é o objeto que quero do redux
// O segundo é função dispatch que irá alterar o estado de acordo com a 'action'
const Sidebar = ({ modules, dispatch }) => (
  <aside className={styles.aside}>
    {modules.map(module => (
      <div key={module.id}>
        <strong className={styles.moduleTitle}>{module.title}</strong>
        <ul className={styles.lessonList}>
          {module.lessons.map(lesson => (
            <li className={styles.lessonItem} key={lesson.id}>
              {lesson.title}

              <button
                className={styles.itemButton}
                onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}
                // Poderia escrever este evento da seguinte maneira
                // onClick={() => dispatch({ type: 'TOGGLE_LESSON'... })}
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect(state => (
  {
    modules: state.course.modules
    // sem a criação do combineReducers, o objeto antes ficava somente
    // modules: state.modules, porém como explicado, o combineReducers
    // cria e retorn um objeto, no caso o course.
  }
))(Sidebar);