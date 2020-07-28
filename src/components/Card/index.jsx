import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './card.module.scss';

import {
  Link
} from "react-router-dom";

export default class Card extends Component {
  render() {
    const { Country, NewConfirmed, TotalRecovered } = this.props.country;
    return (
      <Link to={{
        pathname: "/detail",
        state: {
          country: this.props.country
        }
      }}  >
        <Paper className={styles.card} elevation={1}>
          <div className={styles['card-title']}>{Country}</div>
          <div className={styles['card-subtitle']}>
            <b>Nuevos:</b> {NewConfirmed}
          </div>
          <div className={styles['card-subtitle']}>
            <b>Total:</b> {TotalRecovered}
          </div>
        </Paper>
      </Link>
    );
  }
}
