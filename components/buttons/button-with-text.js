import LargeButton from "./largeButton";
import MediumButton from "./mediumButton";

export default function SmallButtonWithText({ text, children, bgColor }) {
  return (
    <div className={"smallButtonWithText"}>
      <p>{text}</p>
      {children}
      <style jsx>
          {`
            p {
                text-align: center;
                margin: 0;
                font-size: 12px;
                background-color: ${bgColor};
                letter-spacing: 3px;
                line-height: 14px;
                text-transform: uppercase;
            }
            .smallButtonWithText {
                display: grid;
                grid-gap: 10px;
                grid-template-rows: 14px 15px;
            }
          `}
      </style>
    </div>
  );
}

export function MediumButtonWithText({ text, children, bgColor }) {
    return (
      <div className={"mediumButtonWithText"}>
        <p>{text}</p>
        <MediumButton />
        <style jsx>
            {`
              p {
                  text-align: center;
                  margin: 0;
                  font-size: 12px;
                  letter-spacing: 1px;
                  line-height: 14px;
                  text-transform: uppercase;
                  
              }
              .mediumButtonWithText {
                  display: grid;
                  grid-gap: 10px;
                  grid-template-rows: 14px 15px;
                  align-content: center;
              }
            `}
        </style>
      </div>
    );
  }

  export function LargeButtonWithText({ text, children, bgColor }) {
    return (
      <div className={"largeButtonWithText"}>
        <p>{text}</p>
        <LargeButton />
        <style jsx>
            {`
              p {
                  text-align: center;
                  margin: 0 auto;
                  font-size: 12px;
                  letter-spacing: 1px;
                  line-height: 14px;
                  text-transform: uppercase;
                  width: 60px;
              }
              .largeButtonWithText {
                  display: grid;
                  grid-gap: 10px;
                  grid-template-rows: 14px auto;
                  align-content: center;
              }
            `}
        </style>
      </div>
    );
  }