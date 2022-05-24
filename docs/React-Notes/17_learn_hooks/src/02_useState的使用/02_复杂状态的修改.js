import React, { useState } from "react";

export default function ComplexHookModification() {
  const [friends, setFriends] = useState(["kobe", "lilei"]);
  const [student, setStudent] = useState([
    { id: 110, name: "why", age: 18 },
    { id: 111, name: "kobe", age: 30 },
    { id: 112, name: "lilei", age: 25 },
  ]);

  function addFriends() {
    //   与第一个不同的是，第一个传入的是新的数组，React会与原来数组进行判断是否有不同
    //   第二个内部已经增加了很多hmm，但是friends本质没有发生改变(没有产生新的数组和现在这个对比)，所以不会刷新
    friends.push("hmm");
    setFriends(friends);
  }

  function incrementAgeWithIndex(index) {
    const newStudenst = [...student];
    newStudenst[index].age += 1;
    setStudent(newStudenst);
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {/* <button onClick={(e) => setFriends([...friends, "tom"])}>添加好友</button> */}

      {/* 错误做法 */}
      <button onClick={(e) => addFriends()}>添加好友</button>

      <hr />

      <h2>学生列表</h2>
      <ul>
        {student.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                名字：{item.name} 年龄：{item.age}
              </span>
              <button onClick={(e) => incrementAgeWithIndex(index)}>
                age + 1
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
