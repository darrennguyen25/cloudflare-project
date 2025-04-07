"use server";

import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export async function addMessage(input: string) {
  console.log(input, "is the input passed from input component");

  try {
    await db.insert(messages).values({ message: input });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    return { ok: false };
  }

  return { ok: true };
}
