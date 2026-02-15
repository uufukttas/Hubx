import { FC } from 'react';
import { Content } from './src/index';
import styles from '@/styles/App.module.css';

const App: FC = () => {
  return (
    <div className={styles.main}>
      <Content />
    </div>
  );
};

export default App;