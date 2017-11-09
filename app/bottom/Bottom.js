/**
 * Created by chenchaoyang on 2017/10/30.
 */
import React, {Component} from 'react';


/**
 * 底部页脚组件（显示公司名称和链接）
 */
class Footer extends Component{
    render(){
        return( <div className="footer">
            <div>
                <a href={this.props.data.href}>{this.props.data.name}</a>
            </div>
        </div>
        )
    }
}

/**
 * 底部友情链接区域组件
 */
class BottomContent extends Component{
    render(){
        return <div className="content">
                <div>
                    {this.props.data.map(function(item,i){
                        return  <div key={i} className="friendLik">
                            <div className="title">{item.title}</div>
                            <ul>
                                {item.content.map(function(subitem,j){
                                    return <li key={j}>{subitem}</li>
                                })}
                            </ul>
                        </div>
                    })}
                    <div className="friendLik friendLikLast"></div>
                </div>
            </div>
    }
}

/**
 * 底部组件数据文件
 */
var bottomData = require('./bottomData.json');
/**
 * 底部父组件
 */
class Bottom extends Component{
    render(){
        return (
                <div className="bottom">
                    <BottomContent data={this.props.content}/>
                    <Footer data={this.props.footer}/>
                </div>
            );
    }
}
Bottom.defaultProps = bottomData;
export default Bottom