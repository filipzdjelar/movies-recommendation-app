import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import classes from './styles/app.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions/posts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.welcomeSection}>
          <div className={classes.mainTittle}>
            <h1>Welcome</h1>
          </div>
        </div>
        <Posts />
        <Form />
      </div>
    </>
  );
};

export default App;
