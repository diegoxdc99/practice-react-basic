import React, { Component } from 'react';
import { CircularProgress, Fade } from '@material-ui/core';
import styles from './loader.module.scss';

export default class LoaderPage extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <React.Fragment>
          <div className={styles.container}>
            <Fade timeout={500} in="true" unmountOnExit>
              <CircularProgress size='40' className={styles.spiner} />
            </Fade>
          </div>
        </React.Fragment>
      );
    }
    return (<></>);
  }
}
