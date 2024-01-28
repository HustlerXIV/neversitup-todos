import React from "react";

import TextField from "@/components/common/TextField";
import Dialog from "@/components/dialog/Dialog";
import TextArea from "@/components/common/TextArea";
import { TodoDetails } from "@/utils/types";

type Props = {
  onConfirm?: () => void;
  onCancel?: () => void;
  onChange: (name: string, value: string) => void;
  data?: TodoDetails;
};

export default function TodoDialog({
  onConfirm,
  onCancel,
  onChange,
  data,
}: Props) {
  return (
    <Dialog title="Todo" onConfirm={onConfirm} onCancel={onCancel}>
      <div>
        <TextField
          label="Title"
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={data?.title}
          required
          onChange={(e) => onChange("title", e.target.value)}
        />
        <TextArea
          label="Description"
          id="description"
          name="description"
          placeholder="Description"
          value={data?.description}
          required
          onChange={(e) => onChange("description", e.target.value)}
        />
      </div>
    </Dialog>
  );
}
