import React, { Component } from 'react';
import styles from './cards.module.scss';
import './cards.scss';
import Card from '../Card';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class Cards extends Component {
  render() {
    return (
      <div>
        <TransitionGroup exit={false} className={styles.container}>
          {this.props.countries.map((country, index) => (
            <CSSTransition
              in={true}
              key={index}
              timeout={{
                enter: 100,
                exit: 0,
                appear: 0,
              }}
              classNames='fade'
            >
              <React.Fragment>
              <div style={{ transitionDelay: `${index * 30}ms` }}>
                <Card key={index} country={country} />
              </div>
             </React.Fragment>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}
