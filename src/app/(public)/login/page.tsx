import React from "react";
import LoginModule from "./_components/LoginModule";
import { loginAction } from "./actions";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <LoginModule action={loginAction} />
    </div>
  );
}
