import { useState } from "react";
import axios from "axios";

interface Data {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Post = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  getData();
  return (
    <ul className="row list-unstyled">
      {loading ? (
        <li className="col-12 py-5 text-center h3">Loading...</li>
      ) : (
        data.map((item: Data, index: number) => (
          <li key={index} className="col-md-3 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={item.thumbnailUrl}
                alt={item.title}
              />
              <div className="card-body">
                <h3 className="card-title">{item.id}</h3>
                <p className="card-text">{item.title}</p>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default Post;
