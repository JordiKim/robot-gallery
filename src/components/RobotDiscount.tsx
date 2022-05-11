import React from 'react';
import styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../AppState';
import { useContext } from 'react';
import { withAddToCart } from './AddToCart';

interface RobotProps{
    id: number;
    name: string;
    email: string;
    addToCart: (id, name) => void;
} 

const RobotDiscount : React.FC<RobotProps> = ({id, name, email, addToCart}) => {
    const value = useContext(appContext);
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="" />
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={() => addToCart(id, name)}>加入購物車</button>
        </div>
    );
};

export default withAddToCart(RobotDiscount);