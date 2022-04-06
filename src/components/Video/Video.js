import { useSelector } from 'react-redux';

import styles from './Video.module.css';

const Video = () => {
  const activeModule = useSelector(state => state.course.activeModule);
  const activeLesson = useSelector(state => state.course.activeLesson);

  return (
    <div className={styles.videoContainer}>
      <strong className={styles.videoModule}>
        {activeModule ? `Módulo - ${activeModule.title}` : null}
      </strong>
      <span className={styles.videoLesson}>
        {activeLesson ? `Módulo - ${activeLesson.title}` : null}
      </span>
    </div>
  );
};

export default Video;