import styled from 'styled-components';
import {useRouter} from 'next/router';

const DispCont = styled.div`
display:flex;
`;

const ImageCont = styled.div`
width:100px;
height:100px;
border-radius:10px;
border:#DDE solid 5px;
margin:10px;
`;

const DispImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
export default function Display({
  arr=[]
}){
  const r = useRouter ();
  return <DispCont>
    {
      arr.map((o, i) => <ImageCont onClick={()=>r.push({
        pathname:"/categories/results",
        query:{
          item:o.route
        }
      })}>
        <DispImage src={o.img} />
        </ImageCont>)
    }
  </DispCont>
}