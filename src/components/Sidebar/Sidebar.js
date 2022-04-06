import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();
 
  return (
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
                >
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
};

export default Sidebar;