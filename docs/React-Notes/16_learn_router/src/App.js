import React, { PureComponent } from "react";

import { NavLink, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";

import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: "/", title: "首页" },
        { to: "/about", title: "关于" },
        { to: "/profile", title: "我的" },
      ],
      currentIndex: 0,
    };
  }

  render() {
    const id = "abc";
    const info = { name: "why", age: 18, height: 1.88 };

    return (
      <div>
        <NavLink exact to="/" activeClassName="link-active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">
          详情
        </NavLink>
        <NavLink to="/detail2?name=why&age=12" activeClassName="link-active">
          详情2
        </NavLink>
        {/* 参数传递 */}
        <NavLink
          to={{
            pathname: "/detail3",
            search: "?name=abc",
            state: info,
          }}
          activeClassName="link-active"
        >
          详情3
        </NavLink>
        <button onClick={(e) => this.jump2Products()}>商品</button>
        {/* Switch组件，防止一个路由匹配到其他路由，目的是精准匹配一个精确的路由路径即可 */}
        {/* <Switch>
          xxx 路由（Route）定义路径和组件之间的映射关系
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/profile" component={profile} />
          xxx <Route path="/:id" component={user} />
          <Route path="/user" component={user} />
          <Route path="/login" component={login} />
          <Route path="/product" component={product} />
          <Route path="/detail/:id" component={detail} />
          <Route path="/detail2" component={detail2} />
          <Route path="/detail3" component={detail3} />
          <Route component={noMatch} />
        </Switch> */}
        {renderRoutes(routes)}
      </div>
    );
  }
  jump2Products() {
    this.props.history.push("/product");
  }
}

export default withRouter(App);
