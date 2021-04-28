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
        {children}
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
