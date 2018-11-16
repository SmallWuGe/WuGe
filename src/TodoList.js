import React, { Component,Fragment } from 'react';
import  './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list : ['好好学习','天天向上'],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    
    render(){
        return(
            <Fragment>
                <label htmlFor='innerText'>输入内容：</label>
                <input
                    id='innerText'
                    className='inputStyle'
                    value={ this.state.inputValue }
                    onChange={ this.handleInputChange }
                />
                <button
                    className='buttonStyle'
                    onClick={ this.handleBtnClick }> 确 定
                </button>
                <ul>
                    { this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return this.state.list.map((item,index) => {
            return (
                    <TodoItem
                        key = {index}
                        item = {item}
                        index = {index}
                        deleteItem = { this.handleItemDelete}
                    />
            )
        })
    }
    handleInputChange(e){
        const  value = e.target.value;
        this.setState(() => ({
            inputValue :  value
        }));
        

    }
    handleBtnClick(){
        this.setState(( prevState)=> ({
            list : [...prevState.list , prevState.inputValue],
            inputValue : '',
        }));
    }
    

    handleItemDelete(index){

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {
                list
            }
        })
        
        
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list : list,
        })
    }
    
}
export default TodoList;
