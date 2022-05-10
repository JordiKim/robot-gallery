import React, { HtmlHTMLAttributes } from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from '../AppState';

interface Props{

}

interface State{
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State>{

    // 生命週期第一階段：初始化
    // 初始化組建 state
    constructor(props: Props){
        super(props);
        this.state = {
            isOpen: false
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.target : 描述的是事件發生的元素
        // e.currentTarget : 描述的是事件處理綁定的元素
        console.log('e.target ' ,e.target);
        console.log('e.currentTarget ', e.currentTarget);

        if((e.target as HTMLElement).nodeName === 'SPAN'){
            this.setState({isOpen: !this.state.isOpen})
        }
    }

    render(){
        return (
            <appContext.Consumer>
                { (value) => {
                    return (
                        <div className={styles.cartContainer}>
                            <button 
                                className={styles.button} 
                                onClick={this.handleClick}
                            >
                                <FiShoppingCart></FiShoppingCart>
                                <span>購物車 {value.shoppingCart.items.length} (件)</span>
                            </button>
                            <div 
                                className={styles.cartDropDown}
                                style={{
                                    display: this.state.isOpen ? "block" : "none"
                                }}
                            >
                                <ul>
                                    {value.shoppingCart.items.map(i => {
                                        return (
                                            <li>{i.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </appContext.Consumer>
        )
    };
}

export default ShoppingCart;