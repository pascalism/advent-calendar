export default {
  ProfileCardWrapper: {
    display: 'block',
    margin: 20,
    padding: 20,
    height: 100,
    width: 100,
    backgroundColor: 'hsla(0, 0%, 74%, 0.3)',
    boxShadow: '20px 20px 60px 2px #545454',
    borderRadius: '20px',
  },
  Tag: {
    textAlign: 'center',
    color: 'white',
    font: '20px Crimson Pro',
  },
  door: {
    width: ' 100%',
    '&:hover div:last-child': {
      visibility: 'visible',
    },
  },
  front: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    visibility: 'hidden',
  },
  day: {
    textAlign: 'center',
    color: 'white',
    font: '35px Crimson Pro',
  },
  font: {
    font: '30px Crimson Pro',
    textAlign: 'center',
    color: 'white',
  },
  '@media screen and (min-width: 1400px)': {
    ProfileCardWrapper: {
      display: 'block',
      margin: 20,
      padding: 20,
      height: 200,
      width: 200,
      backgroundColor: 'hsla(0, 0%, 74%, 0.3)',
      boxShadow: '10px 10px 60px 2px #545454',
      borderRadius: '20px',
    },
    day: {
      textAlign: 'center',
      color: 'white',
      font: '50px Crimson Pro',
    },
    font: {
      font: '40px Crimson Pro',
      textAlign: 'center',
      color: 'white',
    },
    Tag: {
      textAlign: 'center',
      color: 'white',
      font: '30px Crimson Pro',
    },
  },
};
