import z from 'zod';
export const bookingSchema = z.object({
    name: z
        .string({ message: "Введіть ім'я" })
        .min(1, { message: "Введіть ім'я" })
        .max(10, { message: 'Максимальна довжина імені 10 символів' }),
    phone: z.e164({message: 'Приклад введення номера: +38012345678'}),
    numbOfPeople: z.number({message: 'Введіть цифру'}).max(8, {message: 'Максимальна кількість осіб: 8'}),
    agreement: z
        .boolean()
        .refine((value) => value, {
        message: "Потрібно погодитись з умовами",
    })
})
export type BookingFormValues = z.infer<typeof bookingSchema>;