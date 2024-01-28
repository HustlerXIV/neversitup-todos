"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import TextField from "@/components/common/TextField";
import { LoginAction } from "../actions";

export default function LoginModule({ action }: { action: LoginAction }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    const resp = await action(formData);

    startTransition(() => {
      if (resp.status === "error") {
        return;
      }
      router.push("/");
    });
  };

  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "40px",
        }}
      >
        <h5>Todo App</h5>
        <form action={onSubmit}>
          <TextField
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Your username"
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
          />
          <Button style={{ marginTop: "20px" }} label="Login" type="submit" />
        </form>
      </Card>
    </div>
  );
}
