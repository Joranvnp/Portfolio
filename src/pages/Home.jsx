import { Heading, Theme } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import Header from "../components/header/Header";
import { Skill } from "../components/skills/Skill";
import { Presentation } from "../components/presentation/Presentation";

const Home = () => {
  return (
    <>
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
         */}
        <Presentation />
        {/* <Skill /> */}
      </Theme>
    </>
  );
};

export default Home;
