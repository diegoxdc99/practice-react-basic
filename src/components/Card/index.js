import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './card.module.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Country, NewConfirmed, TotalRecovered, key } = this.props.country;
    return (
      // <div className={`${styles.card}, ${styles["card--translate"]}`}>
      <Paper className={styles.card} elevation={1}>
        <div className={styles['card-title']}>{Country}</div>
        <div className={styles['card-subtitle']}>
          <b>Nuevos:</b> {NewConfirmed}
        </div>
        <div className={styles['card-subtitle']}>
          <b>Total:</b> {TotalRecovered}

        </div>
      </Paper>
    );
  }
}
