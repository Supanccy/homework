/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react';

/**
 * 顶部区域登录区域组件
 */
class LoginDiv extends Component{
    render(){
        return (
            <div className="loginDiv">
                <div>
                    <ul>
                        {this.props.data.map(
                            function(item,i){
                                if(i == 0 || i == 1 || i == 3 || i == 5){
                                    return <li className="menu" key={i}>{item}</li>
                                }else{
                                    return  <li key={i}>{item}</li>
                                }
                            },this
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

/**
 * 顶部区域搜索区域组件
 */
class SearchDiv extends Component{
    render(){
        return (
            <div className="searchDiv">
                <div>
                    <div></div>
                    <div className="searchInput">
                        <div className="searchType">
                            <ul>
                                <li className="active">求购</li>
                                <li>产品</li>
                            </ul>
                        </div>
                        <div className="searchBorder">
                             <span className="inputDiv">
                                 <input type="text" defaultValue="输入求购信息（JXYFOREVER）"/>
                             </span>
                            <span className="searchButton">搜索</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * 顶部区域导航区域组件
 */
class NavDiv extends Component{
    /**
     * 构造函数设置props和state属性
     */
    constructor(props){
        super(props);
        this.state = {
            index: 0,
        };
    }

    /**
     * 菜单的点击事件（点击菜单-->改变组件的state值-->重新渲染组件）
     */
    handleMenuClick(i){
        this.setState({
            index:i
        });
    }
    render(){
        return (
            <div className="navDiv">
                <div>
                    <ul>
                        {this.props.data.map(
                            function(item,i){
                                return <li onClick={this.handleMenuClick.bind(this,i)} className={this.state.index == i ? 'active' : ''} key={i}>{item.name}</li>
                            },this
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

/***
 * 页面顶部组件（包含登录条，搜索框，一级菜单）
 */
class Top extends Component{

    /**
     * 顶部区域主组件
     */
    render() {
        return (
            <div className="top">
                <LoginDiv data={this.props.loginDiv}/>
                <SearchDiv />
                <NavDiv data={this.props.nav}/>
            </div>
            );
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
}

/**
 * 设置顶部区域的数据
 * @type {{loginDiv: string[], nav: string[]}}
 */
Top.defaultProps = {
    loginDiv:["你好，请登录","免费注册","|","我是采购商","|","我是供应商","|"],
    nav:[{
        "name":"首页1",
        "select":true,
    },{
        "name":"采购公告",
        "select":false,
    },{
        "name":"中标公告",
        "select":false,
    },{
        "name":"采购政策",
        "select":false,
    },{
        "name":"网上超市",
        "select":false,
    }]
}

export default Top