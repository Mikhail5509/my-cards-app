import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card title="Special title treatment" text="With supporting text below as a natural lead-in to additional content.">
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image="https://via.placeholder.com/150"
      >
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
};

export default App;
