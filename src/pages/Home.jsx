import { Heading } from "@radix-ui/themes";

import { useThemeContext } from "@radix-ui/themes";

const Home = () => {
  const currentAccentColor = useThemeContext().accentColor;

  return (
    <div>
      <Heading color={currentAccentColor}>Joran Vanpeene</Heading>
    </div>
  );
};

export default Home;
