import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import App from "./App";

WebFont.load({
  google: {
    families: [
      "Raleway: 500, 300, 700", // https://fonts.google.com/specimen/Raleway?query=rale&preview.text=RCVBUA+SAOT+IHJL+HZPR+QHEC+TQBT+FJHUTP+FIJJW+BRCVCD&preview.text_type=custom
      "Poppins: 400, 300, 500", // https://fonts.google.com/specimen/Poppins?preview.text=RCVBUA+SAOT+IHJL+HZPR+QHEC+TQBT+FJHUTP+FIJJW+BRCVCD&preview.text_type=custom
      "sans-serif"
    ]
  }
});

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
