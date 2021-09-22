import styled from "styled-components";
import controller from "./controller.svg";

const quote = "Five minutes ahead of schedule, right on schedule";
function spanCreator(quote) {
  const quoteArray = quote.split(" ");

  const letterArray = quoteArray.map((word, index) => {
    return word.split("");
  });

  return letterArray;
}
const quoteResult = spanCreator(quote);

const TextHoverBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 520px;
  background: url(${controller}),
    linear-gradient(
      to right,
      hsla(50, 83%, 60%, 1),
      hsla(60, 62%, 59%, 1),
      hsla(80, 62%, 65%, 1),
      hsla(111, 54%, 69%, 1),
      hsla(131, 54%, 68%, 1),
      hsla(154, 60%, 61%, 1),
      hsla(164, 64%, 57%, 1),
      hsla(172, 66%, 52%, 1),
      hsla(178, 78%, 47%, 1)
    );

  background-size: repeat;
  /* background-blend-mode: normal; */
  background-blend-mode: soft-light;
  font-family: "Alfa Slab One", cursive;
`;

const QuoteWrapper = styled.div`
  width: 600px;
`;
const OuterSpan = styled.div`
  display: inline-block;
  color: white;
  font-size: calc(2em + 24px);
  letter-spacing: 5px;
  margin: 0;
  &:nth-child(n + 1) {
    margin-right: 20px;
  }
`;

const InnerSpan = styled.span`
  display: inline-block;

  &:hover {
    transition: transform 300ms ease-in-out;
    transform-origin: 50% 50%;
    transform: translateY(-5px) scale(1.2) rotate(-15deg);
  }
`;

const HoverDirections = styled.p``;

function TextHover() {
  return (
    <TextHoverBackground>
      <QuoteWrapper>
        {quoteResult.map((word) => {
          return (
            <OuterSpan>
              {word.map((letter) => (
                <InnerSpan>{letter}</InnerSpan>
              ))}
            </OuterSpan>
          );
        })}
      </QuoteWrapper>
      <HoverDirections>Hover over 👆🏼 each letter </HoverDirections>
    </TextHoverBackground>
  );
}

export default TextHover;
