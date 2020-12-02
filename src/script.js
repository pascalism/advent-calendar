const days = [];
const RECEIVERS = ['Lina', 'Julia', 'Pascalis'];
const PRESENTERS = ['Pascalis', 'Lina', 'Julia'];

for (let index = 0; index < 24; index++) {
  days.push(index);
}

const getPresenter = (day, receiver, add, acc) => {
  if (
    receiver === PRESENTERS[(day + add) % 3] ||
    (acc.length >= 3 && acc[day - 3].presenter === PRESENTERS[(day + add) % 3])
  ) {
    return getPresenter(day, receiver, ++add, acc);
  } else {
    return PRESENTERS[(day + add) % 3];
  }
};

const getCalendar = () =>
  days
    .reduce((acc, day) => {
      const receiver = RECEIVERS[day % 3];
      const presenter = getPresenter(day, receiver, 0, acc);

      acc.push({ day, receiver, presenter });
      return acc;
    }, [])
    .map((x) => {
      return {
        Tag: x.day + 1,
        Empfänger: x.receiver,
        Verschenker: x.presenter,
      };
    });

export default getCalendar;
