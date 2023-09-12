import { Button } from "./Button";

const buttonProps = [
  {
    backgroundColor: "red",
    textColor: "#fff",
    text: "button 1",
  },

  {
    backgroundColor: "blue",
    textColor: "#fff",
    text: "button 2",
  },

  {
    backgroundColor: "yellow",
    // textColor: "#fff",
    text: "button 3",
  },

  {
    backgroundColor: "pink",
    // textColor: "#fff",
    text: "button 4",
  },

  {
    backgroundColor: "green",
    textColor: "#fff",
    text: "button 5",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      {buttonProps.map((item) => (
        <Button buttonProps={item}>
          <em>{item.text}</em>
        </Button>
      ))}
    </div>
  );
}

export default App;
