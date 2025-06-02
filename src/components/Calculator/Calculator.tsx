import './Calculator.css';

interface CalculatorProps {
  day?: number;
  month?: number;
  year?: number;
}

export default function Calculator({ day, month, year }: CalculatorProps) {
  const calculateAge = () => {
    const birthDate = new Date(Number(year), Number(month) - 1, day);
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
    <div className="calculator-container">
      <div className="calculator-label">
        <p className="calculator-text">{age.years ? age.years : '--'}</p>
        <h1 className="calculator-header">years</h1>
      </div>

      <div className="calculator-label">
        <p className="calculator-text">{age.months ? age.months : '--'}</p>
        <h1 className="calculator-header">months</h1>
      </div>

      <div className="calculator-label">
        <p className="calculator-text">{age.days ? age.days : '--'}</p>
        <h1 className="calculator-header">days</h1>
      </div>
    </div>
  );
}
