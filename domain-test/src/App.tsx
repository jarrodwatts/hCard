import React, { useState } from "react";
import "./App.css";
import useForm from "./utils/useForm";
import Form from "./components/Form/Form";
import HCard from "./components/HCard/HCard";

function App() {
  const { formState, handleChange: changeFormValue } = useForm();
  const [image, setImage] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="container">
      <Form
        changeFormValue={changeFormValue}
        handleImageUpload={handleImageUpload}
      />
      <HCard formState={formState} image={image} />
    </div>
  );
}

export default App;
