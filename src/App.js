import React from "react";

function Fav({ name, picture }) {
  return (
    <div>
      <h2>What i like</h2>
      <h3>{name}</h3>
      <img src={picture} />
    </div>
  );
}

const whatILike = [
  {
    name: "code",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "code1",
    image:
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
    name: "coder",
    image:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQwMzA0fQ&auto=format&fit=crop&w=1051&q=80"
  }
];

function renderWhatILike(eachItem) {
  return <Fav name={eachItem.name} picture={eachItem.image} />;
}

function App() {
  return <div>{whatILike.map(renderWhatILike)}</div>;
}

export default App;
