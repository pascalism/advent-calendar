import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';
import CalendarDoor from '../CalendarDoor/index';
import getCalendar from '../script';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Grid = ({ classes }) => {
  const displayCalendarDoors = () =>
    shuffleArray(getCalendar()).map((x, i) => (
      <CalendarDoor key={x.Tag} data={x} />
    ));

  return (
    <div className={classes.Background}>
      <div className={classes.Container}>
        <div className={classes.Grid}>{displayCalendarDoors()}</div>
      </div>
    </div>
  );
};

const StyledGrid = injectSheet(styles)(Grid);
export default StyledGrid;
