import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FormData } from "../../schemas/schema";
import schema from "../../schemas/schema";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./FormComponent.css";

interface FormComponentProps {
  onSubmit: (day: number, month: number, year: number) => void;
}

export default function FormComponent({ onSubmit }: FormComponentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data.day, data.month, data.year);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-component">
      <div className="inputs-container">
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <input
            placeholder="DD"
            type="number"
            id="day"
            {...register("day", { valueAsNumber: true })}
          />
          {errors.day && (
            <span className="error-message">{errors.day.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="month">Month</label>
          <input
            placeholder="MM"
            type="number"
            id="month"
            {...register("month", { valueAsNumber: true })}
          />
          {errors.month && (
            <span className="error-message">{errors.month.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            placeholder="YYYY"
            type="number"
            id="year"
            {...register("year", { valueAsNumber: true })}
          />
          {errors.year && (
            <span className="error-message">{errors.year.message}</span>
          )}
        </div>
      </div>
      <div className="submit-wrapper">
        <button type="submit" className="submit-button">
          <ExpandMoreIcon className="expand-icon" />
        </button>
      </div>
    </form>
  );
}
