import React, {Component} from 'react';
import NaviBar from "./NaviBar";
import NaviBar2 from "./NaviBar2";

class App extends Component {
    render() {
        return (
            <div>
                <NaviBar>
                    <span>aaa</span>
                    <strong>bbb</strong>
                    <a href="#">ccc</a>
                </NaviBar>
                <NaviBar2 leftSlot={<span>aaa</span>}
                          centerSlot={<strong>bbb</strong>}
                          rightSlot={<a href="#">ccc</a>}/>
            </div>
        );
    }
}

export default App;