import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
`;

const Paragraph = (props) => {
  return (
    <StyledParagraph
      color={props.color}
      size={props.size}
      weight={props.weight}
      height={props.height}
      margin={props.margin}
      text={props.text}
    >
      {props.text}{" "}
      {/* You need to actually render the text inside the paragraph */}
    </StyledParagraph>
  );
};

export default Paragraph;
