import { useState } from "react";

export default function useForm() {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return {
    formState,
    handleChange,
  };
}
