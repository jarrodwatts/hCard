import { useState } from "react";

/**
 * Custom React Hook to manage state for any form.
 * Manages an object of key value pairs where the:
 * Key: Is the name of the input field (e.g. surname)
 * Value: Is the current value of that respective input field (e.g. "Watts")
 * Updates the formState state object whenever a change is made,
 * to an input field with the handleChange function attached to its onChange handler.
 * */
export default function useForm() {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Spread the initial state in, and update the key which we want on top of that.
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Return access to the state and a way of updating this state from another component.
  return {
    formState,
    handleChange,
  };
}
