import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robot.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props{};

interface State{
  robotGllery: any[]
  count: number
};
class App extends React.Component<Props, State> {

  // 生命週期第一階段： 初始化
  // 初始化組件： state
  constructor(props: Props){
    super(props);
    this.state = {
      robotGllery: [],
      count: 0
    };
  }

  // 在組件創建好DOM元素以後，掛載進頁面的時候調用
  // 只會在組件被初始化的時候調用一次
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({robotGllery: data}))
  }

  // 生命週期第一階段： 更新
  // 在組件接收到一個新的prop(更新後)時被調用
  // 在組件初始化以及組件更新的時候被調用
  // componentWillReceiveProps 以廢棄
  // state getDerivedStateFromProps(nextProps, prevState){}
  // shouldComponentUpdate(nextProps, nextState){
  //   return nextState.some !== this.state.some
  // }
  // 在組件更新後被調用
  componentDidUpdate(){}

  // 生命週期第一階段： 銷毀
  // 在組件銷毀後調用
  // 可以當作析構函數 destructor 來使用
  // 透過這個函數可以回收各種監聽以及事件
  componentWillUnmount(){}

  render(){
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button 
          onClick={() => {
            this.setState({count: this.state.count+1})
            console.log('count ',this.state.count)
          }}
        >Click</button>
        <ShoppingCart></ShoppingCart>
        <span>count: {this.state.count}</span>
        <div className={styles.robotList}>
          {/* {robots.map(r => <Robot id={r.id} email={r.email} name={r.name}></Robot>)} */}
          {this.state.robotGllery.map(r => <Robot id={r.id} email={r.email} name={r.name}></Robot>)}
        </div>
      </div>
    );
  }
}

export default App;
