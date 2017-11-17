/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react'
import Top from './top/top.js';
import Middle from './middle/middle.js';
import Bottom from './bottom/Bottom.js';
import FixSearch from './top/fixSearch.js';



class Wrap extends Component{

    // //每隔3秒通过改变组件的status来更换背景图片
    // componentDidMount(){
    //     window.addEventListener('scroll',()=>{
    //         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //         if(scrollTop > 120){
    //             alert("开始进行");
    //         }
    //     })
    // }

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