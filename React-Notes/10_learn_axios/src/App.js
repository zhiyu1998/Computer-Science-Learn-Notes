import React, {PureComponent} from 'react';

import request from './service/request'

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        /*axios({
            url: 'https://httpbin.org/get',
            param: {
                name: 'why',
                age: 18
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        });

        axios({
            url: 'https://httpbin.org/post',
            data: {
                name: 'kobe',
                age: 40
            },
            method: 'post'
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })

        axios.get('https://httpbin.org/get', {
            param: {
                name: 'lilei',
                age: 30
            }
        }).then(console.log);

        axios.post('https://httpbin.org/post', {
            name: 'lucy',
            age:28
        }).then(console.log)*/

        // 异步方式发送网络请求
        /*try {
            const req = await axios.get('https://httpbin.org/get', {
                param: {
                    name: 'lilei',
                    age: 30
                }
            })

            console.log(req)
        } catch (e) {
            console.error(e)
        }*/

        // 合并网络请求
        /*const requset1 = axios({
            url: 'https://httpbin.org/get',
            params: {name: 'why', age: 18}
        })
        const requset2 = axios({
            url: 'https://httpbin.org/post',
            params: {name: 'kobe', age: 40},
            method: 'post'
        })*/

        // ([res1, res2]) 数组的解构
        //  axios.all本质是：Promise.all
        /*axios.all([requset1, requset2]).then(([res1, res2]) => {
            console.log(res1, res2)
        }).catch(err => {
            console.error(err)
        })*/

        // 请求拦截
        /*axios.interceptors.request.use(config => {
            // 拦截操作
            // 1. 发送网络请求时，在界面中间显示Loading的组件

            // 2. 某一请求要求用户必须携带token，如果没有就跳转到登录页面

            // 3. param/data序列号操作


            // 返回过去
            return config
        }, err => {

        })*/

        request({
            url: '/get',
            params: {
                name: 'why',
                age: 18
            }
        }).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}


export default App;
