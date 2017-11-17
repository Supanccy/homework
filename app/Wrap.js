/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react'
import Top from './top/top.js';
import Middle from './middle/middle.js';
import Bottom from './bottom/Bottom.js';
import FixSearch from './top/fixSearch.js';

class Wrap extends Component{
    render() {
        return (
            <div>
                <FixSearch />
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