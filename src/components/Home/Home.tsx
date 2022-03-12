import { ReactElement } from "react";
import GameList from "../GameList/GameList";
import { Wrapper } from "./styles";

const Home = (): ReactElement => {
  return (
    <Wrapper>
      <GameList />
    </Wrapper>
  );
};

export default Home;
