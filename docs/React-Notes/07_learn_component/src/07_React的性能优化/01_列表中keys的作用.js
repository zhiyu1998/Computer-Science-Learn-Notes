import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: ["星际穿越", '盗梦空间']
        }
    }

    render() {
        return (
            <div>
                <h2>电影列表</h2>
                <ul>
                    {
                        this.state.movies.map((item, index) => {
                            // 优化：使用className 加入Key（key必须唯一，不要使用随机数）
                            return <li className={item}>{item}</li>
                        } )
                    }
                </ul>
                <button onClick={e => this.insertMovie()}>添加电影</button>
            </div>
        );
    }

    insertMovie() {
        /*this.setState({
            movies: [...this.state.movies, '大话西游']
        })*/
        this.setState({
            movies: ['大话西游', ...this.state.movies] // 与原先的不一样，第一个数据与第二个数据不一样（大话西游：星际穿越），后面以此类推，三次都不一样
            // 解决方案：加入key
        })
    }

}

export default App;