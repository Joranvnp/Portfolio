import "../styles/App.css";
import Home from "../pages/Home";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <html>
      <body>
        <Theme
          hasBackground={true}
          appearance="dark"
          accentColor="teal"
          grayColor="sage"
          panelBackground="solid"
          radius="small"
          scaling="100%"
        >
          <Home />
        </Theme>
      </body>
    </html>
  );
}

export default App;
