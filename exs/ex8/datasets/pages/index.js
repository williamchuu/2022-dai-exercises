<<<<<<< Updated upstream
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import { ChangeName } from '../data/que_content.js'

export default function Home() {
  const r = useRouter();
  return (
    <div className={styles.container}>
      {/* a tag -> reloads the browser to move to the page -> all the data gets flushed */}
      {/* <a href="/questions">go to questions</a> */}
     <input type='text' placeholder='what is your name?'
     onChange={
       (e)=>ChangeName(e.target.value) //event, element, value
     }
     />
     {/* router -> reloads only the template -> no data gets destroyed */}
     <button onClick={()=>r.push("/questions")}>go to questions</button>
=======
import styled, { keyframes } from 'styled-components'
import Card from '../comps/Card';
import { fadeIn, fadeOut } from '../data/animation';
import shows from '../data/disney_shows.json';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Switch from '../comps/Card/Switch';
import { options, ChangeOptions } from '../data/global_content';


// const HomeCont = styled.div`
// background-color:#DAA;
// animation:${fadeIn} 5s;
// `
// const HomeH1 = styled.h1`
// animation:${fadeOut} 8s;
// `

// const ShowCont = styled.div`
// background:${props=>props.bg || '#AAD'};
// animation:${props=>props.fade} 3s;
// padding: 10px;
// position: relative;
// animation-delay:${props=>props.delay || "0s"};
// animation-fill-mode: both;
// `

// export default function Home() {

//   const [words, setWords] = useState('welcome to my app');
//   const [f, setF] = useState(fadeIn);
//   // const [sel, setSel] = useState(false);
//   const [sel, setSel] = useState(0);

//   const r = useRouter();
//   var { qnum } = r.query;

//   if (qnum === undefined) {
//     qnum = 0;
//   }

//   //fade out -> qnum increase (next show) -> fade in
//   const NextShow = () => {
//     //fade out
//     setF(fadeOut);
//     setTimeout(()=>{
//     //change shows -> increase qnum
//     r.push({
//       pathname: "/",
//       query: {
//         qnum: Number(qnum) + 5
//       }
//     })
//     //fade in
//     setF(fadeIn);
//   },7000)
// }

// useEffect(()=>{
//   //fade in
//   setF(fadeIn);
// },[qnum])

// qnum = Number(qnum);
//   return (
//     <HomeCont>
//       {/* show some cards here */}
//       <HomeH1>{words}</HomeH1>
//       <button onClick={
//         ()=>setWords('hi, the values have changed')
//         }>change words</button>

//         {/* {
//           qnum = 0;
//           0, 1, 2, 3, 4 -->
//           5, 6, 7, 8, 9,
//         } */}
//       <ShowCont
//         fade={f}
//         bg={sel === qnum? "#ADA" : "#AAD"}
//         onClick={
//           ()=>setSel(qnum)//opposite of sel. toggle boolean
//         }
//         >
//         {shows[qnum].title} -
//         {shows[qnum].release_year}
//       </ShowCont>
//       <ShowCont
//         fade={f}
//         delay="1s"
//         bg={sel === qnum+1? "#ADA" : "#AAD"}
//         onClick={
//           ()=>setSel(qnum+1)
//         }
//         >
//         {shows[qnum+1].title} -
//         {shows[qnum+1].release_year}
//       </ShowCont>
//       <ShowCont
//         fade={f}
//         delay="2s"
//         bg={sel === qnum+2 ? "#ADA" : "#AAD"}
//         onClick={
//           ()=>setSel(qnum+2)
//         }
//         >
//         {shows[qnum+2].title} -
//         {shows[qnum+2].release_year}
//       </ShowCont>
//       <ShowCont
//         fade={f}
//         delay="3s"
//         bg={sel === qnum+3 ? "#ADA" : "#AAD"}
//         onClick={
//           ()=>setSel(qnum+3)
//         }
//         >
//         {shows[qnum+3].title} -
//         {shows[qnum+3].release_year}
//       </ShowCont>
//       <ShowCont
//         fade={f}
//         delay="4s"
//         bg={sel === qnum+4? "#ADA" : "#AAD"}
//         onClick={
//           ()=>setSel(qnum+4)
//         }
//         >
//         {shows[qnum+4].title} -
//         {shows[qnum+4].release_year}
//       </ShowCont>
//       <h3> you've selected {shows[sel].title}</h3>
//       <div>

//         <button onClick={
//           () => NextShow()
//         }>Next Shows</button>
//         <button onClick={
//           ()=>setF(fadeOut)
//           }>fade out</button>
//       </div>
//     </HomeCont>
//   )
// }

//week 17
export default function Home() {
  return (
    // <div>
    //   <Switch
    //     active={options.op1}
    //     onChange={
    //       (val) => ChangeOptions("op1", val)
    //     } />
    //   <Switch
    //     active={options.op2}
    //     onChange={
    //       (val) => ChangeOptions("op2", val)
    //     } />
    //   <Switch
    //     active={options.op3}
    //     onChange={
    //       (val) => ChangeOptions("op3", val)
    //     } />
    //   <Switch
    //     active={options.op1
    //     }
    //     onChange={
    //       (val) => ChangeOptions("op1", val)
    //     } />
    // </div>
    <div>
      <Card
      title={shows[2].title}
      description={shows[2].description}/>
>>>>>>> Stashed changes
    </div>
  )
}