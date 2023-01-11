import { icons } from 'Icons/icons';
import { Container, List, Item, Text, Button } from './Statistics.styled';
import { Component } from 'react';

export default class Statistics extends Component {
  state = {
    stats: [
      {
        id: '1',
        title: 'Happy Customers',
        total: 2147,
      },
      {
        id: '2',
        title: 'Registered Members',
        total: 4,
      },
      {
        id: '3',
        title: 'Available Products',
        total: 289,
      },
      {
        id: '4',
        title: 'Saved Trees',
        total: 1563,
      },
    ],
    activeIndex: null,
  };

  onRemoveBtn = id => {
    this.setState(prevState => {
      return { stats: prevState.stats.filter(filt => filt.id !== id) };
    });
  };
  onClickItem = index => {
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    const { stats, activeIndex } = this.state;
    const { title } = this.props;
    return (
      <Container title={title}>
        {title && <h2>{title}</h2>}

        <List>
          {stats.map((stat, index) => (
            <Item
              active={activeIndex === index}
              onClick={() => this.onClickItem(index)}
              key={stat.id}
            >
              <Text>{stat.title}</Text>
              {icons[index]}

              <Text>{stat.total}</Text>

              <Button type="button" onClick={() => this.onRemoveBtn(stat.id)}>
                Remove
              </Button>
            </Item>
          ))}
        </List>
      </Container>
    );
  }
}
