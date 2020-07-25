import React, { Component } from 'react';
import styles from './cards.module.scss';
import './cards.scss';
import Card from '../Card';
import {
  CSSTransition,
  TransitionGroup,

} from 'react-transition-group';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
<TransitionGroup className={styles.container}>
        {this.props.countries.map((country, index) => (

          <CSSTransition
          key={index}
          timeout={0}
          classNames="fade"
        >
          <div  style={{ 'transition-delay': `${index * 40}ms` }}>
            <Card key={index} country={country} />
            </div>
          </CSSTransition>

        ))}
        </TransitionGroup>

      </div>
    );
  }
}
