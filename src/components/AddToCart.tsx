import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from './Robot';

// HOC 就是接收一個組件，再返回一個新組件
export const withAddToCart = (ChildrenComponent: React.ComponentType<RobotProps>) => {
    // class寫法
    // return class extends React.Component{}

    // FC寫法
    // 回傳一個新組件給withAddToCart
    return (props) => {
        const setState = useContext(appSetStateContext);
        const addToCart = (id, name) => {
            if(setState){
                setState(state => {
                    return {
                        ...state,
                        shoppingCart:{
                            items: [...state.shoppingCart.items, {id, name}]
                        }
                    }
                })
            }
        }
        return <ChildrenComponent {...props} addToCart={addToCart}/>
    }
}