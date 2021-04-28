import MediumButton from "./mediumButton";

export default function MediumButtonWithTextLight({ text, children, bgColor }) {
  return (
    <div className={"mediumButtonWithText"}>
      <p>{text}</p>
      <div className={"light"}></div>
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
            white-space: nowrap;
          }
          .mediumButtonWithText {
            display: grid;
            grid-gap: 5px;
            grid-template-rows: 14px 15px;
            align-content: center;
          }
          .light {
            border-radius: 100%;
            height: 7px;
            width: 7px;
            background-color: #9def9d;
            margin: 0 auto;
            box-shadow: 0px 0px 7px 2px #24ca24;
          }
        `}
      </style>
    </div>
  );
}
