import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 220px;
  height: 300px;
  transition: all 0.5s ease-in;
  background-color: ${({ theme }) => theme.backgroundColor2};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 1rem;
  overflow: hidden;

  .content {
    padding: 0.2rem 1rem;
  }
  .icons {
    display: flex;
    justify-contents: space-between;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-weight: 540;
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const Genre = styled.p`
  padding: 2px 4px;
  color: ${({ theme }) => theme.tertiaryTextColor};
  background-color: ${({ theme }) => theme.primaryColor};
`;
