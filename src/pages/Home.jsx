import { Heading, Theme } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <Theme
      hasBackground={true}
      appearance="light"
      accentColor="teal"
      grayColor="sage"
      panelBackground="solid"
      radius="small"
      scaling="100%"
    >
      <Header />
      {/* <Button variant="surface">Edit profile</Button>
      <Heading>Joran Vanpeene</Heading> */}
    </Theme>
  );
};

export default Home;
