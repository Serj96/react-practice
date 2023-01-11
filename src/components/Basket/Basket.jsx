import { Component } from 'react';
import { Section, Button, Item, Text } from './Basket.styled';

export default class Basket extends Component {
  state = {
    apple: 0,
    milk: 0,
    cheese: 0,
  };
  total = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num);
  };
  onClick = item => {
    console.log(item);
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };
  render() {
    const { apple, milk, cheese } = this.state;
    const options = Object.keys(this.state);
    console.log(options);
    return (
      <Section>
        <h1>Basket</h1>
        <>
          {options.map(item => (
            <Button key={item} type="button" onClick={() => this.onClick(item)}>
              {item}
            </Button>
          ))}
        </>
        {this.total() > 0 && (
          <ul>
            <Item>
              <Text>Apple: {apple}</Text>
            </Item>
            <Item>
              <Text>Milk: {milk}</Text>
            </Item>
            <Item>
              <Text>Cheese: {cheese}</Text>
            </Item>
            <Item>
              <Text>Total: {this.total()}</Text>
            </Item>
          </ul>
        )}
      </Section>
    );
  }
}
