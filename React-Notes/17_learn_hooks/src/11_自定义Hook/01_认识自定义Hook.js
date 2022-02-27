import React, { useEffect } from "react";

const Home = (props) => {
  useLoggingLife("Home");
  return <h2>Home</h2>;
};

const Profile = (props) => {
  useLoggingLife("Profile");
  return <h2>Profile</h2>;
};

export default function CustomLifeHookDemo01() {
  useLoggingLife("CustomLifeHookDemo01");
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  );
}

// 自定义Hook: 在函数名之前加入'use'
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来`);
    return () => {
      console.log(`${name}组件被销毁`);
    };
  }, []);
}
