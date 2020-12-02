import background from '../newbackground.gif';
export default {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    margin: 0,
    alignContent: 'space-around',
  },
  Grid: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    overflow: 'scroll',
    justifyContent: 'center',
  },
  Background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
};
