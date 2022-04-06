import { connect } from 'react-redux';

import styles from './Video.module.css';

const Video = ({ activeModule, activeLesson }) => (
  <div className={styles.videoContainer}>
    <strong className={styles.videoModule}>
      {activeModule ? `Módulo - ${activeModule.title}` : null}
    </strong>
    <span className={styles.videoLesson}>
      {activeLesson ? `Módulo - ${activeLesson.title}` : null}
    </span>
  </div>
);

export default connect(state => (
  {
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
  }
))(Video);