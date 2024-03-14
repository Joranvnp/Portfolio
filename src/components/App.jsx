import "../styles/App.css";
import Home from "../pages/Home";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme
      appearance="light"
      accentColor="teal"
      grayColor="sage"
      radius="small"
    >
      <Home />
    </Theme>
  );
}

export default App;
