import React, { useState } from "react";
import { FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";
import "./home.css";

function HomePage() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSend = () => {
    API.saveExample(state).then((res) => {
      console.log(res);
      const id = res.data._id;
      API.getExample(id).then((res) => {
        setResponse(res.data.example);
        setLoading(false);
      });
    });
  };

  return (
    <div className="container">
      <h2 className="homepage-text">WELCOME! Add text below!</h2>
      <TextArea
        name="example"
        className="home-form-input"
        onChange={handleInputChange}
      />
      <FormBtn className="home-form-formbtn" onClick={onSend}>
        SUBMIT
      </FormBtn>
      <>{loading === false && <>{response}</>}</>
    </div>
  );
}
export default HomePage;
