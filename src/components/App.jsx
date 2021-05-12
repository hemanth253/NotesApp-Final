import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);

  function addToList(input) {
    setList((prevValues) => {
      return [...prevValues, input];
    });
  }
  function deleteInList(id) {
    setList((prevValues) => {
      return prevValues.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addToList={addToList} />
      {list.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            deleteInList={deleteInList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
