[@react.component]
let make = (~name, ~onClick) => <div onClick> {React.string(name)} </div>;