import React, { Component } from 'react'

function Header() {
    return <h2>Header组件</h2>
}

function Banner() {
    return <h2>Banner组件</h2>
}

function ProductList() {
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
            <li>商品列表5</li>
        </ul>
    )
}

function Main() {
    return (
        <div>
            <Banner />
            <ProductList />
        </div>
    )
}

function Footer() {
    return <h2>Footer组件</h2>
}




export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
