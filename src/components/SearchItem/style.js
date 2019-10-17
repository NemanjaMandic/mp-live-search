import styled from "@emotion/styled";
import { colors, mobile } from "../../styles";

const { black, white, main } = colors;

export const Container = styled("div")`
  border: 1px solid ${black};
  display: flex;
  margin-bottom: 10px;
  ${mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrapper = styled("div")`
  border: 1px solid ${main};
`;

export const Link = styled("a")``;

export const Content = styled("div")`
  margin-left: 10px;
`;

export const Title = styled("h3")`
  font-size: 30px;
`;
export const Tags = styled("p")`
  color: ${main};
  font-size: 12px;
`;
export const Likes = styled("div")`
  text-align: center;
`;

export const Icons = styled("span")`
  font-size: 12px;
  margin: 0 10px;
`;
