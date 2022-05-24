import React, { PureComponent } from "react";
import { matchRoutes, renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

export function About() {
  return <h2>企业历史</h2>;
}

export function AboutCulture() {
  return <h2>企业文化</h2>;
}

export function AboutContact() {
  return <h2>联系电话：020-787878970</h2>;
}

export function AboutJoin() {
  return <h2>投递简历到12321312@qq.com</h2>;
}

export default class about extends PureComponent {
  render() {
    const branch = matchRoutes(this.props.route.routes, "/about");
    console.log(branch);
    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">
          企业历史
        </NavLink>
        <NavLink exact to="/about/culture" activeClassName="about-active">
          企业文化
        </NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">
          联系我们
        </NavLink>
        <button onClick={(e) => this.joinUs()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/about/culture" component={AboutCulture} />
          <Route exact path="/about/contact" component={AboutContact} />
          <Route exact path="/about/join" component={AboutJoin} />
        </Switch> */}
        {/* {renderRoutes(routes[1].routes)} */}
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }

  joinUs() {
    // console.log(this.props.history);
    // console.log(this.props.location);
    // 路由的手动跳转
    this.props.history.push("/about/join");
  }
}
