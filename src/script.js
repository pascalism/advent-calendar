const days = [];
const RECEIVERS = ['Lina', 'Julia', 'Pascalis'];
const PRESENTERS = ['Pascalis', 'Lina', 'Julia'];

for (let index = 0; index < 24; index++) {
  days.push(index);
}

const getPresenter = (day, receiver, add, acc) =>
  !(
    receiver === PRESENTERS[(day + add) % 3] ||
    (acc.length >= 3 && acc[day - 3].presenter === PRESENTERS[(day + add) % 3])
  )
    ? PRESENTERS[(day + add) % 3]
    : getPresenter(day, receiver, ++add, acc);

const getCalendar = () =>
  days
    .reduce((acc, day) => {
      const receiver = RECEIVERS[day % 3];
      const presenter = getPresenter(day, receiver, 0, acc);

      acc.push({ day, receiver, presenter });
      return acc;
    }, [])
    .map((x) => ({
      ...x,
      day: x.day + 1,
    }));

export default getCalendar;
