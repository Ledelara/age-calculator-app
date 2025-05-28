interface CalculatorProps {
  day: number;
  month: number;
  year: number;
}

export default function Calculator({ day, month, year }: CalculatorProps) {
  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDays += prevMonth;
      ageMonths--;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const age = calculateAge();

  return (
    <div>
      <h2>Your Age:</h2>
      <p>
        {age.years} {age.years === 1 ? "year" : "years"},{" "}
        {age.months} {age.months === 1 ? "month" : "months"},{" "}
        {age.days} {age.days === 1 ? "day" : "days"} old
      </p>
    </div>
  );
}
