import { z } from "zod";

const schema  = z.object({
  day: z.number({ message: 'Must be a bumber' }).int().min(1).max(31, { message: "Day must be between 1 and 31" }),
  month: z.number({ message: 'Must be a bumber' }).int().min(1).max(12, { message: "Month must be between 1 and 12" }),
  year: z.number({ message: 'Must be a bumber' }).int().min(1900, { message: "Year must be at least 1900" }).max(new Date().getFullYear(), { message: "Year cannot be in the future" }),
})

export type FormData = z.infer<typeof schema>;
export default schema;