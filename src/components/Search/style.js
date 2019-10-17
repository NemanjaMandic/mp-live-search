import styled from "@emotion/styled";
import { colors } from "../../styles";

const { black, white, main } = colors;

export const Container = styled("div")`
  width: 100%;
  position: relative;
`;

export const Title = styled("h2")`
  color: ${black};
  font-size: 30px;
  text-align: center;
`;

export const Label = styled("label")`
  position: relative;
`;

export const Input = styled("input")`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  box-sizing: border-box;
  outline: none;
`;

export const SearchIcon = styled("i")`
  position: absolute;
  right: 23px;
  bottom: 21px;
`;
