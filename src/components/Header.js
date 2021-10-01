import React from "react";
import Logo from "../images/cainglet_logo-01.svg";

const Header = () => (
  <div className="header-display">
    <header className="columns is-vcentered">
      <div className="column has-text-centered">
        <a href="/" title="AJ Cainglet Insurance Agency">
          <img
            src={Logo}
            alt="AJ Cainglet Insurance Agency"
            width="300"
            height="75"
          />
        </a>
      </div>
      <div className="column has-text-centered">
        <a href="tel:310-830-7136">
          <p className="is-size-4 has-text-weight-semibold">
            <svg
              width="24px"
              height="24px"
              fill="#831618"
              viewBox="0 0 200 200"
            >
              <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
            </svg>
            Call: 310-830-7136
          </p>
        </a>
        <a href="sms:916-827-3385">
          <p className="is-size-4 has-text-weight-semibold">
            <svg
              width="24px"
              height="24px"
              fill="#831618"
              viewBox="0 0 200 200"
            >
              <path d="M169.393,167.37l-14.919,9.848c-9.604,6.614-50.531,14.049-106.211-53.404C-5.415,58.873,9.934,22.86,17.134,14.555L29.523,1.678c2.921-2.491,7.328-2.198,9.839,0.811l32.583,38.543l0.02,0.02c2.384,2.824,2.306,7.22-0.83,9.868v0.029l-14.44,10.415c-5.716,5.667-0.733,14.587,5.11,23.204l27.786,32.808c12.926,12.477,20.009,18.241,26.194,14.118l12.008-13.395c2.941-2.472,7.328-2.169,9.839,0.821l32.603,38.543v0.02C172.607,160.316,172.519,164.703,169.393,167.37z" />
            </svg>
            Text: 916-827-3385
          </p>
        </a>
      </div>
    </header>
  </div>
);

export default Header;
