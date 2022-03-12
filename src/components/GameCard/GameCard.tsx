import { ReactElement } from "react";
import { Game } from "../../types";
import { Details, Genre, StyledLink, Title } from "./styles";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content;
  const link = `/game/${id}`;
  return (
    <StyledLink to={link}>
      <img src={thumbnail} alt={`${title} logo`} />
      <div className="content">
        <Title>{title}</Title>
        <Details>{short_description}</Details>
        <div className="icons">
          <p>browser</p>
          <Genre>{genre}</Genre>
        </div>
      </div>
    </StyledLink>
  );
};

export default GameCard;
