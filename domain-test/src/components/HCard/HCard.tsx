import { ReactElement } from "react";
import avatar from "../../avatar.png";

interface Props {
  formState: Record<string, string>;
  image: string | undefined;
}

/**
 * Displays the values inputted by the user in a preview hCard format.
 * @param formState: An object representing the keys (labels) and values of each textfield from the form.
 * @param image: The URL of the image (if any) the user has uploaded via the form.
 * */
export default function HCard({ formState, image }: Props): ReactElement {
  return (
    <div className="section grey-bg">
      <div className="hcard-area">
        <div className="hcard-base">
          <h2 className="hint" style={{ fontSize: 22, fontWeight: 400 }}>
            hCard Preview
          </h2>
        </div>

        <div className="hcard-body">
          <div className="primary hcard-header">
            <h2 style={{ color: "#fff", fontSize: 42 }}>
              {formState["given name"]} {formState["surname"]}
            </h2>
            <div className="avatar-frame">
              <img
                id="avatar"
                data-testid="avatar"
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
                  <p className="hcard-label">EMAIL</p>
                  <p>{formState["email"]}</p>
                </>
              </div>
              <hr style={{ marginTop: -12 }} />
            </>

            <>
              <div className="hcard-info-grid">
                <>
                  <p className="hcard-label">PHONE</p>
                  <p>{formState["phone"]}</p>
                </>
              </div>
              <hr style={{ marginTop: -12 }} />
            </>

            <>
              <div className="hcard-info-grid">
                <>
                  <p className="hcard-label">ADDRESS</p>
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
                  <p className="hcard-label">POSTCODE</p>
                  <p>{formState["postcode"]}</p>
                  <p className="hcard-label">COUNTRY</p>
                  <p>{formState["country"]}</p>
                </>
              </div>
              <hr style={{ marginTop: -12 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
