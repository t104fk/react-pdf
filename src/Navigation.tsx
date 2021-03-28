import { css } from '@emotion/css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { SomeReport } from './reports/some';

const linkStyle = css`
  text-decoration: none;
`
const wrapperStyle = css`
  display: flex;
  justify-content: center;
`
const areaStyle = css`
  width: 80%;
  border: 1px solid #000;
`
const Navigation: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul className={css`list-style: none`}>
          <li>
            <Link className={linkStyle} to="/someReport">report</Link>
          </li>
        </ul>
      </nav>
      <div className={wrapperStyle}>
        <div className={areaStyle}>
          <Switch>
            <Route path="/someReport">
              <SomeReport/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
export default Navigation;
