import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

const SwitchCont = styled.div`
padding: 20px;
`;

const SwitchBox = styled.div`
background-color: ${props => props.bg || "#CCC"}; //active = #CCF, inactive = #CCC
width: 100px;
height: 30px;
display: flex;
align-items: center;
border-radius: 18px;
transition: background 0.3s;
`;

const SwitchToggle = styled.div`
background: ${props => props.bg || "#AAA"}; // active = #AAF, inactive = #AAA
width: 50px;
height: 50px;
position: relative;
left: ${props => props.left || "0px"}; //active = 50px, inactive = 0px;
border-radius: 50%;
transition: left 0.3s, background 0.3s;
`;

const switch_data = {
  active: {
    boxbg: "#CCF",
    togglebg: "#AAF",
    toggleleft: "50px"
  },
  inactive: {
    boxbg: "#CCC",
    togglebg: "#AAA",
    toggleleft: "0px"
  }
}

export default function Switch({
  //attributes / props
  active = false,
  onSwitch = () => { }
}) {

  const [a_state, setAState] = useState(active ? "active" : "inactive");
  //first is variable, second is function that triggers the variable
  //synchronize the prop (active) and a_state together
  useEffect(() => {
    //mimic a state change
    if (active === true) {
      setAState("active");
    } else {
      setAState("inactive");
    }

    //if the prop (active is changed, perform this function)
  }, [active])

  useEffect(() => {
    if (a_state === "inactive") {
      onSwitch(false);
    }
    else {
      onSwitch(true);
    }
  }, [a_state])
  return <div>
    <SwitchCont>
      <SwitchBox
        bg={
          switch_data[a_state].boxbg}>
        <SwitchToggle
          bg={switch_data[a_state].togglebg}
          //"find inactive and use boxbg" ^

          left={switch_data[a_state].toggleleft}
          onClick={
            //a_state ? false : true --> !a_state is the short way
            () => setAState(a_state === "inactive" ? "active" : "inactive")
          }></SwitchToggle>
      </SwitchBox>
    </SwitchCont>
  </div>
}