import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

const InputsInput = styled.input`
padding: 20px;
border: #CCC dashed 1px;
color: #999;
`

export default function Inputs({
  //attributes / props
  txt = "",
  edit = false
}) {
  const [val, setVal] = useState(txt);

  //synchronize the prop (txt) with the state (val)
  useEffect(() => {
    setVal(txt)
  }, [txt]);
  if (edit === false) {
    return <div>
      {val}
    </div>
  }
  return <div>
    <InputsInput type='text' value={val}
      onChange={
        (e) => setVal(e.target.value)
      } />
  </div>
}