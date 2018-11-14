import React, { Component,Fragment } from 'react';
import  './style.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list : ['好好学习','天天向上'],
        }
    }
    
    render(){
        return(
            <Fragment>
                <label htmlFor='innerText'>输入内容：</label>
                <input
                    id='innerText'
                    className='inputStyle'
                    value={ this.state.inputValue }
                    onChange={ this.handleInputChange.bind(this) }
                />
                <button
                    className='buttonStyle'
                    onClick={ this.handleBtnClick.bind(this) }
                > 确 定
                </button>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li key={ index } onClick={ this.handleDelClick.bind(this,index)}>
                                    <a href='#'> —>{ item } .</a>
                                    {/*
                                    dangerouslySetInnerHTML 对内容不进行转义，如添加<h1>aaaa</h1> 直接显示带h1标签的样式内容
                                    <a href='#' dangerouslySetInnerHTML={{__html: item}} ></a>
                                   */}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue : e.target.value,
        })
    }
    handleBtnClick(){
        this.setState({
            list : [...this.state.list , this.state.inputValue],
            inputValue : '',
        })
    }
    
    handleDelClick(index){
        //react 不允许直接修改state;
        //对于数组做任何复合类型操作 ，都需要先深层拷贝 ...
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list : list,
        })
    }
    
}
export default TodoList;
