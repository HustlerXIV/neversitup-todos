"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import "./component.css";
import { TodoDetails } from "@/utils/types";
import TodoDialog from "./TodoDialog";
import { createTodo } from "../actions";

type Props = {
  onList?: () => void;
  onFinish?: () => void;
};

export default function Navbar({ onList, onFinish }: Props) {
  const [display, setDisplay] = useState<boolean>(false);
  const [details, setDetails] = useState<TodoDetails>({
    title: "",
    description: "",
  });
  const router = useRouter();

  const handleOnDisplay = () => {
    setDisplay((prev) => !prev);
    router.refresh();
  };

  const handleOnChange = (key: string, value: string) => {
    setDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      {display && (
        <TodoDialog
          onConfirm={() => createTodo(details, handleOnDisplay)}
          onCancel={handleOnDisplay}
          onChange={handleOnChange}
        />
      )}
      <div className="nav-container">
        <button
          className="rounded-btn shadow-md pink-gradient size-50px font-white"
          onClick={onFinish}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <button
          className="rounded-btn shadow-md bg-white size-75px"
          onClick={onList}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button
          className="rounded-btn shadow-md blue-gradient size-50px font-white"
          onClick={handleOnDisplay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
