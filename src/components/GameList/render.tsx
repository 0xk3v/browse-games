import { ReactElement } from "react";
import { Game } from "../../types";
import GameCard from "../GameCard/GameCard";
import { List, UList } from "./styles";

interface Props {
  err?: string;
  games: Game[];
}

const GameListRender = ({ err, games }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }

  if (!games?.length) {
    return <p>No Games available</p>;
  }

  return (
    <UList>
      {games.map((game) => (
        <List key={game.id}>
          <GameCard content={game} />
        </List>
      ))}
    </UList>
  );
};
export default GameListRender;
