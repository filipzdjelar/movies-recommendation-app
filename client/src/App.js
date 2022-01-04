import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import classes from "./style.module.scss";

const App = () => {
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
