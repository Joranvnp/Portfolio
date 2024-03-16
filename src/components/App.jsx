import "../styles/App.css";
import Home from "../pages/Home";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </> // <html>
    //   <body>

    //   </body>
    // </html>
  );
}

export default App;
