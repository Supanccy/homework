/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react';
import styles from './fixSearch.less';//导入

/**
 * 滚动条向下滚动超过120px显示在最顶端的搜索框组件
 */
class FixSearch extends Component{

    /**
     * 构造函数设置props和state属性
     * state的show为true表示显示  ture为false表示隐藏
     */
    constructor(props){
        super(props);
        this.state = {
            show: false,
        };
    }

    //监听window的滚动时间，超过120px显示固定位置搜索框，否则隐藏
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > 120){
                this.setState({
                    show:true
                });
            }else{
                this.setState({
                    show:false
                });
            }
        })
    }

    render(){
        return (
            <div className="searchDiv2"  style={{display: this.state.show == true ? 'block' : 'none'}}>
                <div>
                    <div></div>
                    <div className="searchInput2">
                        <div className="searchType2">
                            <ul>
                                <li className="active2">求购</li>
                                <li>产品</li>
                            </ul>
                        </div>
                        <div className="searchBorder2">
                             <span className="inputDiv2">
                                 <input type="text" defaultValue="输入求购信息"/>
                             </span>
                            <span className="searchButton2">搜索</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FixSearch