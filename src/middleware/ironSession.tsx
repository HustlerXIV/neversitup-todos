"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

type Session = {
  token: string;
};

const sessionOptions = {
  cookieName: "session",
  password: "complex_password_at_least_32_characters_long",
};

export async function getSession() {
  return getIronSession<Session>(cookies(), sessionOptions);
}

export async function saveSession(token: string) {
  const session = await getIronSession<Session>(cookies(), {
    ...sessionOptions,
  });
  session.token = token;
  await session.save();
}
