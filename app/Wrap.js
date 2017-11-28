/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react'
import Top from './top/top.js';
import Middle from './middle/middle.js';
import Bottom from './bottom/Bottom.js';
import FixSearch from './top/fixSearch.js';

/**
 * 向上火箭组件
 */
class UpHuoJian extends  Component{
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
    //监听window的滚动，超过120px显示固定位置搜索框，否则隐藏
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > 0){
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
    /**
     * 点击火箭按钮处理函数
     */
    clickHuoJianBtn(){
        $("html").animate({
            'scrollTop':0
        },1000);
    }
    render(){
        return(
            <div onClick={this.clickHuoJianBtn.bind(this)} className="up icon iconfontHuoJian" title="回到顶部" style={{display: this.state.show == true ? 'block' : 'none'}}>&#xe601;</div>
        )
    }
}

/**
 * 二维码组件
 */
class ErWeiMa extends  Component{
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
    //监听window的滚动，超过120px显示固定位置搜索框，否则隐藏
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > 0){
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
    /**
     * 点击火箭按钮处理函数
     */
    clickHuoJianBtn(){
        document.getElementsByTagName('html')[0].scrollTop = 0;
    }

    /**
     * 关闭二维码
     */
    handCloseErWeiMa(){
        $(".erweima").hide(600);
    }

    render(){
        return(
            <div className="erweima">
                <div onClick={this.handCloseErWeiMa.bind(this)} className="closeBtn icon  iconfont" >&#xe69a;</div>
                <div className="img"></div>
                <div className="title">手机请扫二维码</div>
            </div>
        )
    }
}

/**
 * 二维码组件
 */
class LeftArea extends  Component{
    render(){
        return(
            <div className="leftArea">
                <ul>
                    <li title="账号" className="leftAreaiconfont">&#xe6a3;</li>
                    <li title="喜欢" className="leftAreaiconfont">&#xe628;</li>
                    <li title="金钱" className="leftAreaiconfont">&#xe6cb;</li>
                    <li title="限时优惠" className="leftAreaiconfont">&#xe6b7;</li>
                    <li title="购物车" className="leftAreaiconfont">&#xe68e;</li>
                    <li title="刷新" className="leftAreaiconfont">&#xe6a0;</li>
                </ul>
            </div>
        )
    }
}

class Wrap extends Component{

    componentWillMount(){
        document.title = "前端作业--陈超阳"
    }

    render() {
        return (
            <div>
                <LeftArea />
                <ErWeiMa />
                <UpHuoJian />
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