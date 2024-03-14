import { Heading, Theme } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";

const Home = () => {
  return (
    <Theme hasBackground={true}>
      <Button variant="surface">Edit profile</Button>
      <Heading>Joran Vanpeene</Heading>
    </Theme>
  );
};

export default Home;
