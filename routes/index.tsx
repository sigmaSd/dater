const week = 7;
const month = week * 4;

const DateDisplay = ({ name, date }: { name: string; date: Date }) => {
  return (
    <div>
      <h1 class="font-bold">{name}</h1>
      <p class="text-blue-600 font-bold text-xl">{date.toDateString()}</p>
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
