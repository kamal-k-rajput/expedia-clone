import React from "react";
import "./Img.css";
import { Button } from "react-bootstrap";
export const Oneimg = () => {
  return (
    <div>
      <img
        className="hm-img"
        alt="homepage-logo"
        src="https://a.travel-assets.com/travel-assets-manager/ux-887/Global-HP-Hero-928x398.jpg"
      />
      <img
        className="hm-img"
        alt="homepage-logo"
        src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg"
      />

      <div>
        <div>
          <img
            src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
            alt="ft-img"
          />
        </div>
        <div>
          <h2>Our app takes you further</h2>
          <div>
            <p>
              Earn double Expedia Rewards points when you book on the app as a
              member. Save even more on trips so you can take more trips, and
              manage it all on the go.
            </p>
          </div>
          <h3>Text yourself a download link for easy access</h3>

          <div>
            <div>
              <select>
                {" "}
                Country Code
                <option>ind</option>
                <option>nvs</option>
                <option>kd</option>
              </select>
            </div>
            <div>
              {" "}
              <input type="number" placeholder="Phone number" />
            </div>
            <Button>Get the app</Button>
          </div>
          <p>
            By providing your number, you agree to receive a one-time automated
            text message with a link to get the app. Standard text message rates
            may apply.
          </p>
        </div>
        <div className="qr-code">
          <img
            className="qr-code-img"
            src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/14_QR_FOOTER_BNA_HP.png"
            alt="expedia"
          />
        </div>
      </div>
    </div>
  );
};
