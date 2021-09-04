/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';
import './pageTransition/slider.scss';
import { useLocation } from 'react-router';
import { DrinkList } from './pages/drinkList';
import HomePage from './pages/homePage';

interface State {
  prevDepth: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      prevDepth: App.getPathDepth(useLocation()),
    };
  }

  private static getPathDepth(location: { pathname: string; }) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter((n) => n !== '');
    return pathArr.length;
  }

  render() {
    const location = useLocation();
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit
        >
          <div
            className={App.getPathDepth(location) - this.state.prevDepth >= 0 ? 'left' : 'right'}
          >
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/startDrink" exact component={DrinkList} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
