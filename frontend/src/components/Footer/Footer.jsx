import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="ft-link-container">
        <div className="ft-links">
          <img
            src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            alt="expedia icon"
          />
        </div>
        <div className="ft-links">
          <div>
            <h4 className="ft-headings">Company</h4>
          </div>
          <div>About us</div>
          <div>Jobs</div>
          <div>List Your Property</div>
          <div>Partnerships</div>
        </div>
        <div className="ft-links">
          <div>
            <h4 className="ft-headings">Explore</h4>
          </div>
          <div> India travel guide</div>
          <div> Hotels in India</div>
          <div> Holiday rentals in India</div>
          <div> Holiday packages in India</div>
          <div> Domestic flights</div>
          <div> Car hire in India</div>
          <div> All accommodation types</div>
          <div> Travel blog</div>
        </div>
        <div className="ft-links">
          <div>
            <h4 className="ft-headings">Terms and Policies</h4>
          </div>

          <div>Privacy Statement</div>
          <div>Terms of use</div>
          <div>Vrbo terms and conditions</div>
        </div>
        <div className="ft-links">
          <div>
            <h4 className="ft-headings">Help</h4>
          </div>
        </div>
      </div>

      <div >
        <img
          alt=""
          src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
        />

        <div className="ft-last">
          <p>
            © 2022 Expedia, Inc., an Expedia Group company / Expedia Asia
            Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved.
            Expedia and the Airplane Logo are trademarks or registered
            trademarks of Expedia, Inc.
          </p>
        </div>
      </div>
    </>
  );
};
