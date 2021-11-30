import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

interface listProps {
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const List = () => {
  const [list, setList] = useState<listProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get("//jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        setList(response.data);
      })
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  return (
    <React.Fragment>
      <h1>List</h1>
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          list.map((item: listProps, index: number) => (
            <div className="col-3 mb-3" key={index}>
              <div className="card">
                <img
                  src={item.thumbnailUrl}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <p className="card-text">{item.title}</p>
                  <a href={item.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Go
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default List;
