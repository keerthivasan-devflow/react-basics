import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "outlined" ? "white" : "crimson"};
  color: ${({ variant }) => (variant === "outlined" ? "crimson" : "white")};
  border: ${({ variant }) =>
    variant === "outlined" ? "crimson solid 3px" : "none"};
  width: 300px;
  padding: 10px;
  font-size: 16px;
  &:hover {
    background-color: ${({ variant }) =>
      variant !== "outlined" ? "white" : "crimson"};
    color: ${({ variant }) => (variant !== "outlined" ? "crimson" : "white")};
    border: ${({ variant }) =>
      variant !== "outlined" ? "crimson solid 3px" : "none"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(
    to right,
    #4aec22 0%,
    rgb(161, 17, 43) 100%
  );
  &:hover {
    background: lightgreen;
    color: white;
    border: none;
  }
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
  className: "submit-btn",
})`
  border: double 10px red;
  background-color: white;
  color: black;
`;

export const ThemedButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.secondary};
`;
