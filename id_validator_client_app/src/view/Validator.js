import { useEffect, useState } from "react";
import Header from "../components/header";
import List from "../components/list";
import Container from "react-bootstrap/Container";

const Validator = () => {
  //GLOBAL VARIABLES
  const [personalId, setPersonalId] = useState(null); //POST response true/false
  const [list, setList] = useState([]); //GET response array
  const [input, setInput] = useState(""); //input value send via POST request
  const [sendId, setSendId] = useState(); // input value
  const [show, setShow] = useState(false); // variable for showing alert message
  const [message, setMessage] = useState(""); // alert message content
  const [style, setStyle] = useState(""); // alert message color style

  //POST  for validate ID response true/false
  async function postData(url) {
    const response = await fetch(url, {
      method: "POST", //post
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personalId),
    });
    return response.json();
  }

  useEffect(() => {
    //GET log data
    fetch(`/api/IdValidator/`)
      .then((result) => result.json())
      .then((list) => setList(list))
      .catch((error) => {
        if (error) {
          setMessage(`API ühendusega on viga`);
          setShow(true);
          setStyle("danger");
        }
      });

    //if POST response true
    if (personalId === true) {
      setMessage(`IK ${sendId} on valideeritud`);
      setStyle(`success`);
    }
    //if POST response false
    if (personalId === false) {
      setMessage(`IK ${sendId} ei valideeru `);
      setStyle(`danger`);
    }
  }, [sendId, personalId]);

  //SEND BUTTON function
  const handleSubmit = (event) => {
    event.preventDefault();

    //check input lenghth
    if (input.length === 11) {
      //input to number
      const toNumber = parseInt(input);

      //check input is number true/false
      if (Number.isInteger(toNumber)) {
        //POST ID for validation
        postData(`/api/IdValidator/${toNumber}`).then((personalId) => {
          setPersonalId(personalId);
          setSendId(toNumber);
        });
      }
      //set message and style values if input not number
      setMessage(`IK peab koosnema numbritest`);
      setStyle(`danger`);
    }
    //set message and style values if input shorter than 11
    if (input.length < 11) {
      setMessage(`IK pikkus on 11 numbrit`);
      setStyle(`danger`);
    }

    //set message and style values if input longer than 11
    if (input.length > 11) {
      setMessage(`IK pikkus on 11 numbrit`);
      setStyle(`danger`);
    }
  };

  return (
    <Container className="mt-5">
      <Header
        show={show}
        style={style}
        message={message}
        handleSubmit={handleSubmit}
        setShow={setShow}
        setInput={setInput}
      />
      <List list={list} />
    </Container>
  );
};

export default Validator;
