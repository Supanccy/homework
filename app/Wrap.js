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
 * 左侧快捷入口
 */
class LeftArea extends  Component{

    handMouseOver(liIndex){
        $(".leftArea>ul>li>span").eq(liIndex).show().addClass("leftAreaLiSpanAnimation");
    }
    handMouseOut(liIndex){
        $(".leftArea>ul>li>span").eq(liIndex).show().removeClass("leftAreaLiSpanAnimation");
        $(".leftArea>ul>li>span").eq(liIndex).hide();
    }

    render(){
        return(
            <div className="leftArea">
                <ul>
                    <li onMouseOut={this.handMouseOut.bind(this,0)} onMouseOver={this.handMouseOver.bind(this,0)} className="leftAreaiconfont">&#xe6a3;
                        <span>账号</span>
                    </li>
                    <li onMouseOut={this.handMouseOut.bind(this,1)} onMouseOver={this.handMouseOver.bind(this,1)} className="leftAreaiconfont">&#xe628;
                        <span>喜欢</span>
                    </li>
                    <li onMouseOut={this.handMouseOut.bind(this,2)} onMouseOver={this.handMouseOver.bind(this,2)} className="leftAreaiconfont">&#xe6cb;
                        <span>金钱</span>
                    </li>
                    <li onMouseOut={this.handMouseOut.bind(this,3)} onMouseOver={this.handMouseOver.bind(this,3)} className="leftAreaiconfont">&#xe6b7;
                        <span>限时</span>
                    </li>
                    <li onMouseOut={this.handMouseOut.bind(this,4)} onMouseOver={this.handMouseOver.bind(this,4)} className="leftAreaiconfont">&#xe68e;
                        <span>购物车</span>
                    </li>
                    <li onMouseOut={this.handMouseOut.bind(this,5)} onMouseOver={this.handMouseOver.bind(this,5)} className="leftAreaiconfont">&#xe6a0;
                        <span>刷新</span>
                    </li>
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