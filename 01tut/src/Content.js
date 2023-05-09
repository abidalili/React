import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["bob", "kevin", "abida", "hasan"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`My name is: ${name}`);
  };
  const handleClick3 = (e) => {
    console.log(e);
  };
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}> Click it</button>
      <button onClick={() => handleClick2("Abida")}> Name</button>
      <button onClick={() => handleClick3("Abida")}> Name</button>
    </main>
  );
};

export default Content;
