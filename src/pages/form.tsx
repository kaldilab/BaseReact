import React, { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    job: "",
    age: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValue);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="jumbotron">
              <p className="lead">이름을 입력하세요.</p>
              <input
                name="name"
                className="form-control"
                type="text"
                placeholder="이름"
                onChange={handleChange}
              />
              <hr className="my-4" />
              <h4>{formValue.name}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron">
              <p className="lead">직업을 입력하세요.</p>
              <input
                name="job"
                className="form-control"
                type="text"
                placeholder="직업"
                onChange={handleChange}
              />
              <hr className="my-4" />
              <h4>{formValue.job}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="jumbotron">
              <p className="lead">나이를 입력하세요.</p>
              <input
                name="age"
                className="form-control"
                type="text"
                placeholder="나이"
                onChange={handleChange}
              />
              <hr className="my-4" />
              <h4>{formValue.age}</h4>
            </div>
          </div>
        </div>
        <div className="py-5 text-center">
          <button className="btn btn-lg btn-dark" type="submit">
            제출
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
