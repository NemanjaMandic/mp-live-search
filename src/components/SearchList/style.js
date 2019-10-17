import styled from "@emotion/styled";
import { mobile, tablet } from "../../styles";
import { colors } from "../../styles";

const { background } = colors;

export const Container = styled("div")`
  display: grid;
`;
export const Layout = styled("div")`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  ${tablet} {
    width: 96%;
  }
`;
