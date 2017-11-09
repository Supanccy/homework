/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react'
import Top from './top/top.js';
import Middle from './middle/middle.js';
import Bottom from './bottom/Bottom.js';

class Wrap extends Component{
    render() {
        return (
            <div>
                <Top />
                <div className="wrap" >
                    <Middle />
                </div>
                <Bottom />
            </div>
            );
    }
}

export default Wrap