import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outlined" ? "white" : "crimson"};
  color: ${(props) => (props.variant === "outlined" ? "crimson" : "white")};
  border-radius: 15px 15px;
  border: ${(props) =>
    props.variant === "outlined" ? "crimson solid 3px" : "none"};
  width: 350px;
  padding: 20px;
  font-size: 16px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "white" : "crimson"};
    color: ${(props) => (props.variant !== "outlined" ? "crimson" : "white")};
    border: ${(props) =>
      props.variant !== "outlined" ? "crimson solid 3px" : "none"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(
    to right,
    #4aec22 0%,
    rgb(161, 17, 43) 100%
  );
`;

export const SubmitButtonType = styled(StyledButton).attrs({
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
