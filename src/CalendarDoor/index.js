import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const today = new Date().getDate();
const month = new Date().getMonth();

const CalendarDoor = ({ classes, data }) => (
  <span className={classes.ProfileCardWrapper}>
    <div className={classes.door}>
      <div className={classes.front}>
        <div className={classes.day}>{data.day}</div>
      </div>
      {month !== 11 || data.day <= today ? (
        <div className={classes.back}>
          <div className={classes.Tag}>Türchen für</div>
          <div className={classes.font}>{data.receiver}</div>
          <div className={classes.Tag}>von {data.presenter}</div>
        </div>
      ) : (
        <div className={classes.back} />
      )}
    </div>
  </span>
);

const StyledCalendarDoor = injectSheet(styles)(CalendarDoor);
export default StyledCalendarDoor;
