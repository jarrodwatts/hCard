import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import avatar from "./avatar.png"; // Tell webpack this JS file uses this image
import UploadButton from "./components/UploadButton/UploadButton";
import useForm from "./utils/useForm";

function App() {
  const { formState, handleChange: changeFormValue } = useForm();

  const [image, setImage] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      console.log(e.target.files);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  console.log(formState);

  return (
    <div className="container">
      {/* Left Side*/}
      <div className="section">
        <div style={{ marginLeft: "4%", marginRight: "4%" }}>
          <h1 className="title">hCard Builder</h1>

          {/* Personal Details */}
          <div>
            <h2 className="hint">Personal Details</h2>
            <hr />
            <div className="form-grid">
              <TextField
                fieldName={"given name"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"surname"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"email"}
                fieldType={"email"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"phone"}
                fieldType={"tel"}
                handleChange={changeFormValue}
              />
            </div>
          </div>

          {/* Address */}
          <div style={{ marginTop: 64 }}>
            <h2 className="hint">Address</h2>
            <hr />
            <div className="form-grid">
              <TextField
                fieldName={"house name or #"}
                fieldType={"number"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"street"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"suburb"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"state"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"postcode"}
                fieldType={"number"}
                handleChange={changeFormValue}
              />
              <TextField
                fieldName={"country"}
                fieldType={"text"}
                handleChange={changeFormValue}
              />

              <div style={{ marginTop: 32 }}>
                <UploadButton handleImageUpload={handleImageUpload} />
              </div>
              <div style={{ marginTop: 32 }}>
                <button
                  onClick={() => console.log("Submit to API!")}
                  className="secondary secondary-button"
                >
                  Create hCard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="section grey-bg">
        <div className="hcard-area">
          <div className="hcard-base">
            <h2 className="hint" style={{ fontSize: 22, fontWeight: 400 }}>
              hCard Preview
            </h2>
          </div>

          {/* Card */}
          <div className="hcard-body">
            <div className="primary hcard-header">
              <h2 style={{ color: "#fff", fontSize: 42 }}>
                {formState["given name"]} {formState["surname"]}
              </h2>
              <div className="avatar-frame">
                <img
                  src={image ?? avatar}
                  alt="avatar icon"
                  width="90"
                  height="105"
                />
              </div>
            </div>

            <div
              style={{
                width: "90%",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: 48,
              }}
            >
              <>
                <div className="hcard-info-grid">
                  <>
                    <p style={{ color: "#34495e" }}>EMAIL</p>
                    <p>{formState["email"]}</p>
                  </>
                </div>
                <hr style={{ marginTop: -12 }} />
              </>

              <>
                <div className="hcard-info-grid">
                  <>
                    <p style={{ color: "#34495e" }}>Phone</p>
                    <p>{formState["phone"]}</p>
                  </>
                </div>
                <hr style={{ marginTop: -12 }} />
              </>

              <>
                <div className="hcard-info-grid">
                  <>
                    <p style={{ color: "#34495e" }}>Address</p>
                    <p>
                      {formState["house name or #"]} {formState["street"]}
                    </p>
                  </>
                </div>
                <hr style={{ marginTop: -12 }} />

                <div className="hcard-info-grid">
                  <>
                    <p></p>
                    <p>
                      {formState["suburb"]} {formState["state"]}
                    </p>
                  </>
                </div>
                <hr style={{ marginTop: -12 }} />
              </>

              <div style={{ paddingBottom: 32 }}>
                <div className="hcard-info-grid-small">
                  <>
                    <p style={{ color: "#34495e" }}>Postcode</p>
                    <p>{formState["postcode"]}</p>
                    <p style={{ color: "#34495e" }}>Country</p>
                    <p>{formState["country"]}</p>
                  </>
                </div>
                <hr style={{ marginTop: -12 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
