import { Resizable } from "re-resizable";
import { Form } from "../forms/Form";

export const ResizableComp = () => {
  return (
    <Resizable
      className="rezisable"
      /*  enable={false} */
      miWidth={300}
      maxWidth={700}
      handleStyles={{
        top: {
          marginTop: -3,
          marginLeft: -5,
          top: 0,
          left: "50%",
          cursor: "ns-resize",
          border: "3px solid #999",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none",
          borderWidth: 5,
          borderColor: "#4d4d4d",
          width: 10,
          height: 10,
          boxSizing: "border-box",
          zIndex: 1,
        },
        left: {
          marginTop: -5,
          marginLeft: -3,
          top: "50%",
          left: 0,
          cursor: "ew-resize",
          border: "3px solid #999",
          borderTop: "none",
          borderRight: "none",
          borderBottom: "none",
          borderWidth: 5,
          borderColor: "#4d4d4d",
          width: 10,
          height: 10,
          boxSizing: "border-box",
          zIndex: 1,
        },
        bottom: {
          marnTop: -7,
          marginLeft: -5,
          top: "100%",
          left: "50%",
          cursor: "ns-resize",
          border: "3px solid #999",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          borderWidth: 5,
          borderColor: "#4d4d4d",
          width: 10,
          height: 10,
          boxSizing: "border-box",
          zIndex: 1,
        },
        right: {
          marginTop: -5,
          marginLeft: -7,
          top: "50%",
          left: "100%",
          cursor: "ew-resize",
          border: "3px solid #999",
          borderTop: "none",
          borderLeft: "none",
          borderBottom: "none",
          borderWidth: 5,
          borderColor: "#4d4d4d",
          width: 10,
          height: 10,
          boxSizing: "border-box",
          zIndex: 1,
        },
      }}
    >
      <Form />
    </Resizable>
  );
};
