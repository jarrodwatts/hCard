import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import avatar from "./avatar.png"; // Tell webpack this JS file uses this image
import UploadButton from "./components/UploadButton/UploadButton";

function App() {
  const [image, setImage] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      console.log(e.target.files);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

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
              <TextField fieldName={"given name"} fieldType={"text"} />
              <TextField fieldName={"surname"} fieldType={"text"} />
              <TextField fieldName={"email"} fieldType={"email"} />
              <TextField fieldName={"phone"} fieldType={"tel"} />
            </div>
          </div>

          {/* Address */}
          <div style={{ marginTop: 64 }}>
            <h2 className="hint">Address</h2>
            <hr />
            <div className="form-grid">
              <TextField fieldName={"house name or #"} fieldType={"number"} />
              <TextField fieldName={"street"} fieldType={"text"} />
              <TextField fieldName={"suburb"} fieldType={"text"} />
              <TextField fieldName={"state"} fieldType={"text"} />
              <TextField fieldName={"postcode"} fieldType={"number"} />
              <TextField fieldName={"country"} fieldType={"text"} />

              <div style={{ marginTop: 32 }}>
                <UploadButton handleImageUpload={handleImageUpload} />
              </div>
              <div style={{ marginTop: 32 }}>
                <button
                  onClick={() => console.log("Submit to API!")}
                  className="secondary"
                  style={{
                    width: "95%",
                    minHeight: 48,
                    borderRadius: 4,
                    fontSize: 24,
                  }}
                >
                  Create hCard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side / Top Side*/}
      <div
        className="section grey-bg"
        style={{
          backgroundColor: "#e1e4e7",
        }}
      >
        <div
          style={{
            width: "90%",
            marginLeft: "8%",
            marginRight: "8%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <h2 className="hint" style={{ fontSize: 22, fontWeight: 400 }}>
              hCard Preview
            </h2>
          </div>

          {/* Card */}
          <div
            style={{
              minHeight: "384px",
              border: "1px solid #9a9a9a",
              background: "#fff",
            }}
          >
            <div
              className="primary"
              style={{
                display: "flex",
                height: "128px",
                paddingLeft: 32,
                paddingRight: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Given Name + Surname */}
              <h2 style={{ color: "white", fontSize: 42 }}>Sam Fairfax</h2>

              {/* Image with overlapping y axis */}
              <div
                style={{
                  background: "#fff",
                  paddingTop: 16,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  marginTop: 48,
                  border: "solid 2px grey",
                }}
              >
                <img
                  src={image ?? avatar}
                  alt="avatar icon"
                  width="90"
                  height="105"
                />
              </div>
            </div>

            {/* Live updating info */}
            <div
              style={{
                width: "90%",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: 48,
              }}
            >
              {/* Field 1 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 5fr",
                }}
              >
                <p style={{ color: "#34495e" }}>EMAIL</p>
                <p>sam.fairfax@fairfaxmedia.com.au</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
