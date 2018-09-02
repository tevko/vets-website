let component = ReasonReact.statelessComponent("Description");

let make = (~description, _children) => {
  ...component,
  render: (_self) => <div> {ReasonReact.string("(" ++ description ++ ")")} </div>
};

[@bs.deriving abstract]
type jsProps = {
  description: string,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~description=jsProps->descriptionGet,
      [||],
    )
  );