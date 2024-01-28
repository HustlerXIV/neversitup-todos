"use client";

import React, { useState } from "react";
import "./component.css";

import Card from "@/components/common/Card";
import { TodoDetails } from "@/utils/types";
import TodoDialog from "./TodoDialog";
import { removeTodo, fetchTodoDetails, updateTodoDetails } from "../actions";
import Dialog from "@/components/dialog/Dialog";

type Props = {
  id?: string;
  title?: string;
  description?: string;
};

export default function TodoCard({ id, title, description }: Props) {
  const [display, setDisplay] = useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);

  const [details, setDetails] = useState<TodoDetails>({
    title: "",
    description: "",
  });

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const handleDeleteDialog = () => {
    setDeleteDialog((prev) => !prev);
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
          onConfirm={() => updateTodoDetails(id, details, handleDisplay)}
          onCancel={handleDisplay}
          onChange={handleOnChange}
          data={details}
        />
      )}
      {deleteDialog && (
        <Dialog
          title="Todo"
          onConfirm={() => removeTodo(id)}
          onCancel={handleDeleteDialog}
        >
          Do you want to delete this item?
        </Dialog>
      )}
      <div className="wrapper-card">
        <Card adjustedClass="p-5 width-100-percent max-width-700">
          <div className="todo-card-container">
            <div className="flex gap-10">
              <div className="truncate width-100">{title}</div>
              <div className="truncate width-200">{description}</div>
            </div>
            <div className="flex gap-5">
              <button
                className="action-btn text-lime-700 shadow-m"
                onClick={() => fetchTodoDetails(id, setDetails, handleDisplay)}
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                className="action-btn text-orange-700 shadow-m"
                onClick={handleDeleteDialog}
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
