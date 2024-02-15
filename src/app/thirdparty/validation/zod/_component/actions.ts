"use server";
import { z } from "zod";

const schema = z.object({
    email: z.string({
        invalid_type_error: "Invalid Email",
    }),
});

const Man = z.object({
    name: z.string(),
    height: z.number(),
    age: z.number().min(10),
    phoneNum: z.string(),
    // homePhoneNum: z.string().optional(),
    isCompletedMilitaryService: z.boolean(),
});

// 타입 선언도 할수있다.
type Man = z.infer<typeof Man>;

export async function check(formData: FormData) {
    const name = formData.get("name");
    const height = Number(formData.get("height"));
    Man.parse({ name, height });
}
