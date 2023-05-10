import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Abida");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["bob", "kevin", "abida", "hasan"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}> Change Name</button>
      <button onClick={handleClick}> button</button>
      <button onClick={handleClick2}> button3</button>
    </main>
  );
};

export default Content;
