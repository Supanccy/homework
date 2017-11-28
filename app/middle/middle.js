/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react'

/**
 * 中部区域组件（包括广告，名企推荐爆品 最新采购情况  采购政策  行业资讯  答疑解惑等）
 */
var middleData = require('./middleData.json');
class Middle extends Component{

    /**
     * 构造函数设置props和state属性
     */
    constructor(props){
        super(props);
        this.state = {
            index: 1,
            lunboTimer:null,
            loginType:1
        };
    }

    //每隔3秒通过改变组件的status来更换背景图片
    componentDidMount(){
        var that = this;
        that.state.lunboTimer = setInterval(function(){
            var no = 1;
            if(that.state.index == 5){
                no = 1;
            }else{
                no = that.state.index + 1
            }
            that.setState({
                index:no
            });
        },2000);


        // this.setState({
        //     lunboTimer: setInterval(function(){
        //         that.handlelunboBtnClick(2);
        //     },2000)
        // })


        $('.cgzc_content').animate({scrollTop:"100px"}, 9000,"linear");
        $('.cgzc_content').animate({scrollTop: '0px'}, 1800);
        // setTimeout(function(){
        //     $('.cgzc_content').animate({scrollTop: '0px'}, 1800);
        // },22000);

        // setInterval(function(){
        //     $('.cgzc_content').animate({scrollTop:$('.bottomSymtom').offset().top}, 80000);
        //     setTimeout(function(){
        //         $('.cgzc_content').animate({scrollTop: '0px'}, 800);
        //     },28000);
        // },30000);
    }

    /**
     *  停止采购政策自动滚动
     */
    handStopAutoScroll(){
        $('.cgzc_content').stop();
    }

    /**
     * 开始自动滚动
     */
    handReStartAutoScroll(){
        $('.cgzc_content').animate({scrollTop:$('.bottomSymtom').offset().top}, 80000);
    }

    /**
     * 点击轮播组件左侧按钮（再点击的时候，首先清空定时器，之后延时1s再开始定时器）；
     *  type:1 左侧按钮
     *       2 右侧按钮
     */
    handlelunboBtnClick(type){

        if(this.state.lunboTimer != null){
            clearInterval(this.state.lunboTimer);
        }

        var no = 1;
        if(type == 1){ //左边按钮
            if(this.state.index == 1){
                no = 5;
            }else{
                no = this.state.index - 1
            }
        }else if(type == 2){ //右边按钮
            if(this.state.index == 5){
                no = 1;
            }else{
                no = this.state.index + 1
            }
        }
        this.setState({
            index:no
        });
    }

    handlelunboListBtnClick(liIndex){
        this.lunboMouseOver();
        this.setState({
            index:liIndex
        });
    }

    handSelectLoginType(type){
        this.setState({
            loginType:type
        })
    }

    /**
     * 轮播组件左右按钮鼠标移走时间
     *  type:1 左侧按钮
     *       2 右侧按钮
     */
    lunboMouseLeave(type){
        if(type == 1){//左侧按钮
            this.componentDidMount();
        }else if(type == 2){//右侧按钮
            this.componentDidMount();
        }
    }

    lunboMouseOver(){
        if(this.state.lunboTimer != null){
            clearInterval(this.state.lunboTimer);
        }
    }

    render() {
        return (
            <div className="middle">
                <div className="ad">
                    <div className={"leftImg adImg" + this.state.index }>
                        <span className="leftBtn icon iconfont"  onMouseOver={this.lunboMouseOver.bind(this,1)}  onClick={this.handlelunboBtnClick.bind(this,1)} onMouseLeave={this.lunboMouseLeave.bind(this,1)}>&#xe697;</span>
                        <span className="rightBtn icon iconfont" onMouseOver={this.lunboMouseOver.bind(this,2)}  onClick={this.handlelunboBtnClick.bind(this,2)} onMouseLeave={this.lunboMouseLeave.bind(this,2)}>&#xe6a7;</span>
                        <div className="listBtn">
                            <ul>
                                <li onMouseLeave={this.lunboMouseLeave.bind(this,1)} onMouseOver={this.handlelunboListBtnClick.bind(this,1)}  className={this.state.index == 1 ? 'active' : ''}></li>
                                <li onMouseLeave={this.lunboMouseLeave.bind(this,1)} onMouseOver={this.handlelunboListBtnClick.bind(this,2)}  className={this.state.index == 2 ? 'active' : ''}></li>
                                <li onMouseLeave={this.lunboMouseLeave.bind(this,1)} onMouseOver={this.handlelunboListBtnClick.bind(this,3)}  className={this.state.index == 3 ? 'active' : ''}></li>
                                <li onMouseLeave={this.lunboMouseLeave.bind(this,1)} onMouseOver={this.handlelunboListBtnClick.bind(this,4)}  className={this.state.index == 4 ? 'active' : ''}></li>
                                <li onMouseLeave={this.lunboMouseLeave.bind(this,1)} onMouseOver={this.handlelunboListBtnClick.bind(this,5)}  className={this.state.index == 5 ? 'active' : ''}></li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightLogin">
                        <div className="notice">欢迎您，登录后您将享受更丰富的服务</div>
                        <div className="loginBtn">
                            <ul>
                                <li>登录</li>
                                <li>注册</li>
                            </ul>
                        </div>
                        <div className="loginContainer">
                            <div className="title">
                                <span onClick={this.handSelectLoginType.bind(this,1)} className={this.state.loginType == 1 ? 'active' : ''}>我是采购商</span>
                                <span onClick={this.handSelectLoginType.bind(this,2)} className={this.state.loginType == 2 ? 'active' : ''}>我是供应商</span>
                                <span></span>
                            </div>
                            <div className="container">
                            </div>
                        </div>

                    </div>
                </div>


                {/*第一：企业采购展示模块*/}
                <div className="mqcgzs">
                    <div className="title">名企采购展示
                        <div title="刷新"></div>
                    </div>
                    <div className="mqcgzs_content">
                        {this.props.mqcgzs.map(
                            function(item,i){
                                return <div className="line" key={i}>{
                                    item.map(function(subitem,j){
                                        if(j == 0){
                                            return <div key={j}>
                                                <div>
                                                    <span>{subitem.item1}</span>
                                                    <span>{subitem.item2}</span>
                                                </div>
                                            </div>
                                        }else{
                                            return <div key={j}>
                                                <div>
                                                    <span><span className="number">{subitem.item1.value}</span>{subitem.item1.unit}</span>
                                                    <span>{subitem.item2}</span>
                                                </div>
                                            </div>
                                        }
                                    })
                                }</div>
                            }
                        )}
                    </div>
                </div>


                {/*第二：企业爆品推荐*/}
                <div className="mqtjbp">
                    <div className="title">名企推荐爆品
                        <div>
                            <ul>
                                {/*渲染右上角的类别列表*/}
                                {this.props.mqtjbp.subTitle.map(
                                    function(item,i){
                                        return <li key={i}>{item}</li>
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="mqtjbp_content">
                        {this.props.mqtjbp.content.map(
                            function(item,i){
                                return <div className="line" key={i}>{
                                    item.map(function(subitem,j){
                                        return <div title={subitem.detail} className="block" key={j}>
                                            <div className="img" title={subitem.detail}></div>
                                            <div className="detail">
                                                {subitem.detail}
                                            </div>
                                            <div className="number">
                                                <span>{subitem.number.price}</span>
                                                <span><span className="yishou">{subitem.number.yishou}</span><span className="number">{subitem.number.value}</span>{subitem.number.unit}</span>
                                            </div>
                                            <div className="address">
                                                <span>{subitem.address.leftContent}</span>
                                                <span>{subitem.address.rightContent}</span>
                                            </div>
                                        </div>
                                    })
                                }</div>
                            }
                        )}
                    </div>
                </div>


                {/*最新采购情况*/}
                <div className="zxcgqk">
                    <div className="title">最新采购情况
                        <div>
                           <ul>
                               {/*渲染右上角的类别列表*/}
                               {this.props.zxcgqk.subTitle.map(
                                   function(item,i){
                                       return <li key={i}>{item}</li>
                                   }
                               )}
                           </ul>
                        </div>
                    </div>
                    <div className="zxcgqk_content">
                           <table width="100%">
                               <tbody>
                                   <tr>
                                       <td>名称</td>
                                       <td>采购量</td>
                                       <td>报价截止</td>
                                       <td>报价数</td>
                                       <td>所在地</td>
                                       <td>操作</td>
                                   </tr>
                                   {/*渲染表格中的内容*/}
                                   {this.props.zxcgqk.content.map(
                                       function(item,i){
                                           return  <tr key={i}>
                                               <td>{item.name}</td>
                                               <td><span className="number">{item.no1}</span>{item.unit1}</td>
                                               <td><span className="number">{item.no2}</span>{item.unit2}</td>
                                               <td><span className="number">{item.no3}</span>{item.unit3}</td>
                                               <td>{item.address}</td>
                                               <td><span>{item.lijibaojia}</span></td>
                                           </tr>
                                       }
                                   )}
                               </tbody>
                           </table>
                    </div>
                </div>
                <div className="cgzcContainer">

                      <div className="cgzc">
                          <div className="title">采购政策
                              <div>
                                  <ul>
                                      <li>更多>></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="cgzc_content">
                              <ul onMouseMove={this.handStopAutoScroll.bind(this)} onMouseLeave={this.handReStartAutoScroll.bind(this)}>
                                  {this.props.cgzc.map(
                                      function(item,i){
                                          return <li key={i}><span>{item.title}</span><span>{item.timestamp}</span></li>
                                      }
                                  )}
                              </ul>
                              <span className="bottomSymtom"></span>
                          </div>
                      </div>

                    <div className="hyzx">
                        <div className="title">行业资讯
                            <div>
                                <ul>
                                    <li>更多>></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hyzx_content">
                             <div className="line">
                                   <div className="title">财政部印发16年证采工作要点加强制度建设制度建设</div>
                                   <div className="content">为进一步完善和深化政府采购制度改革，贯彻落实《中华人民共和国政府采购法实施条例，做好2016年</div>
                             </div>
                             <div className="line">
                                 <div className="title">国家发改委主任总结公共资源交易平台整合制度建设</div>
                                 <div className="content">2月18日，公共资源交易平台整合工作部际联席会议制度第一次全体会议召开，国家发改委主任徐绍</div>
                             </div>
                        </div>
                    </div>
                    <div className="dyjh">
                        <div className="title">答疑解惑
                            <div>
                                <ul>
                                    <li>更多>></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dyjh_content">
                            <div className="line">
                                <div className="title">最低评标价不是善举也不是恶性制度建设</div>
                                <div className="content">在实践中“最低评标价”被简略为“最低价中标”的原因比较复杂，但这两种说法存在实际上的重大却别。最低价中</div>
                            </div>
                            <div className="line">
                                <div className="title">都通过资格预审后能否再组成联合投标制度建设？</div>
                                <div className="content">通过资格预审的资格预审申请人，在投标时也不能相互组成联合体投标。</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            );
    }
}

Middle.defaultProps = middleData;

export default Middle