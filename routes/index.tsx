const week = 7;
const month = week * 4;

// year is not relevant
const holidays = [
  {
    name: "Jour de l'an",
    date: new Date("2022-01-01"),
  },
  {
    name: "Fête de l’Indépendance",
    date: new Date("2022-03-20"),
  },
  {
    name: "Journée des Martyrs",
    date: new Date("2022-04-09"),
  },
  {
    name: "Fête du Travail",
    date: new Date("2022-05-01"),
  },
  {
    name: "Fête du la Femme",
    date: new Date("2022-08-13"),
  },
  {
    name: "Fête de l’Evacuation",
    date: new Date("2022-10-15"),
  },
  {
    name: "Fête de la révolution",
    date: new Date("2022-12-17"),
  },
];
const isHoliday = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();

  return holidays.find((holiday) => {
    return holiday.date.getDate() == day && holiday.date.getMonth() == month;
  });
};

const DateDisplay = ({ name, date }: { name: string; date: Date }) => {
  const maybeHoliday = isHoliday(date);

  return (
    <div class="flex flex-col">
      <h1 class="font-bold place-self-center">{name}</h1>
      {maybeHoliday
        ? (
          <div class="font-bold text-xl flex gap-2">
            <p class="text-blue-600">{date.toDateString()}</p>
            <p class="text-red-500">{maybeHoliday.name}</p>
          </div>
        )
        : <p class="text-blue-600 font-bold text-xl">{date.toDateString()}</p>}
    </div>
  );
};
export default function Home() {
  return (
    <div class="min-h-screen p-4 flex gap-8 flex-col items-center justify-center text-lg">
      <DateDisplay name="Today" date={new Date()} />
      <DateDisplay name="+ 15 jours" date={dateWithDaysOffset(2 * week)} />
      <DateDisplay name="+ 1 mois" date={dateWithDaysOffset(month)} />
      <DateDisplay name="+ 2 mois" date={dateWithDaysOffset(2 * month)} />
      <DateDisplay name="+ 3 mois" date={dateWithDaysOffset(3 * month)} />
      <DateDisplay name="+ 4 mois" date={dateWithDaysOffset(4 * month)} />
      <DateDisplay name="+ 6 mois" date={dateWithDaysOffset(6 * month)} />
    </div>
  );
}

const dateWithDaysOffset = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};
