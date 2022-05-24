import React, { Component} from "react";

// export default class Index extends Component {
//     constructor() {
//         super();
//         this.state = {
//             message: '你好啊'
//         }
//     }

//     render() { 
//         return(
//             <div>
//                 <h2>我是App组件</h2>
//                 <h2>{this.state.message}</h2>
//             </div>
//         )
//     }
// }


/**
 * 函数式组件的特点：
 * 1. 没有this对象
 * 2. 没有内部的状态
 * @returns 
 */
export default function App() {
    return (
        <div>
            <span>我是function组件：App组件</span>
            <h2>你好啊啊</h2>
        </div>
    )
}
