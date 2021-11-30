import React from "react";

interface listProps {
  title: string;
  text: string;
  image: string;
  date: string;
}

const list = [
  {
    title: "apple",
    text: "Id consequat commodo dolore ad deserunt.",
    image: "sample1.jpg",
    date: "2021.01.01",
  },
  {
    title: "banana",
    text: "Aliqua tempor tempor enim est excepteur nisi incididunt excepteur proident ea.",
    image: "sample2.jpg",
    date: "2021.01.01",
  },
  {
    title: "berry",
    text: "Sit esse consequat pariatur pariatur ullamco laboris sint ullamco.",
    image: "sample3.jpg",
    date: "2021.01.01",
  },
  {
    title: "people",
    text: "Consectetur culpa duis non aute mollit ut tempor consectetur ipsum esse ullamco minim elit.",
    image: "sample4.jpg",
    date: "2021.01.01",
  },
  {
    title: "car",
    text: "Quis mollit anim eiusmod consequat.",
    image: "sample5.jpg",
    date: "2021.01.01",
  },
  {
    title: "mobile",
    text: "Consectetur culpa duis non aute mollit ut tempor consectetur ipsum esse ullamco minim elit.",
    image: "sample6.jpg",
    date: "2021.01.01",
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <div className="row">
        {list.map((item: listProps, index: number) => (
          <div className="col-6 mb-3" key={index}>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={require("../assets/images/" + item.image).default}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                    <p className="card-text">
                      <small className="text-muted">{item.date}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
