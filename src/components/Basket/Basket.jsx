import { Component } from "react";


export default class Basket extends Component {
    state = {
        apple: 0,
        milk: 0,
        cheese: 0
    }
    total = () => {

        return Object.values(this.state).reduce((acc, num) => acc + num);
    }
    onClick = (item) => {
        console.log(item);
        this.setState(prevState => ({
            [item]: prevState[item] + 1
        }))
    }
    render() {
        const { apple, milk, cheese } = this.state;
        const options = Object.keys(this.state);
        console.log(options);
        return <div>
            <>
                {options.map(item =>
                    <button type="button" onClick={() => this.onClick(item)}>{item}</button>
                )}
            </>
            {this.total() > 0 && <ul>
                <li>Apple:<p>{apple}</p></li>
                <li>milk:<p>{milk}</p></li>
                <li>cheese:<p>{cheese}</p></li>
                <li>total:{this.total()}</li>
            </ul>}
        </div>
    }
}