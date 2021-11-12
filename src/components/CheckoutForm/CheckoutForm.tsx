import React, { useState } from "react";
import { Input } from "../../components/Input/Input";

import * as S from "./CheckoutForm.style";

// TODO: Create box component

export const CheckoutForm = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    postalCode: "",
    comments: "",
  });
  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.currentTarget.value;
    setForm({ ...form, [event.currentTarget.name]: value });
  };
  return (
    <S.FormInfo>
      <div style={{ padding: "8px", display: "flex", alignItems: "center" }}>
        Name:
        <Input
          placeholder="Name"
          name="name"
          value={form["name"]}
          onChange={handleChangeForm}
        />
      </div>
      <div style={{ padding: "8px", display: "flex", alignItems: "center" }}>
        Email:
        <Input
          placeholder="Email"
          name="email"
          value={form["email"]}
          onChange={handleChangeForm}
        />
        Postal code:
        <Input
          placeholder="posta code"
          name="postalCode"
          value={form["postalCode"]}
          onChange={handleChangeForm}
        />
      </div>
      <div style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
        Comments:
        <S.TextArea
          placeholder="Comments"
          name="comments"
          value={form["comments"]}
          onChange={handleChangeForm}
          rows={4}
        />
      </div>
    </S.FormInfo>
  );
};
