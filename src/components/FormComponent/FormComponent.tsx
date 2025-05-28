import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FormData } from "../../schemas/schema";
import schema from "../../schemas/schema";


interface FormComponentProps {
  onSubmit: (day: number, month: number, year: number) => void;
}

export default function FormComponent({ onSubmit }: FormComponentProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data.day, data.month, data.year);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="day">Day</label>
        <input type="number" id="day" {...register("day", { valueAsNumber: true })} />
        {errors.day && <span>{errors.day.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="month">Month</label>
        <input type="number" id="month" {...register("month", { valueAsNumber: true })} />
        {errors.month && <span>{errors.month.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input type="number" id="year" {...register("year", { valueAsNumber: true })} />
        {errors.year && <span>{errors.year.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
