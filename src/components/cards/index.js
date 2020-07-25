import React, { Component } from 'react';
import styles from './cards.module.scss';
import Card from '../Card';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.countries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    );
  }
}
