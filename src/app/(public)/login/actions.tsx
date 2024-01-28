"use server";

import { saveSession } from "@/middleware/ironSession";
import { fetchData } from "@/utils/api";
import { POST } from "@/utils/constants";

const ENDPOINT: string = "/users/auth";

export async function loginAction(
  formData: FormData
): Promise<{ status: string }> {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return { status: "error" };
  }

  try {
    const response = await fetchData({
      method: POST,
      endpoint: ENDPOINT,
      data: { username, password },
    });

    const { token } = response;
    await saveSession(token);

    return { status: "success" };
  } catch (e) {
    return { status: "error" };
  }
}

export type LoginAction = typeof loginAction;
