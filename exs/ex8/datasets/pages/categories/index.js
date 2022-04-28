//import {useRouter}
import { useRouter } from 'next/router';
import Display from '../../comps/Display';

//import your 3rd category data
import { header, cat1, cat2, cat3, cat1Imgs, cat2Imgs, cat3Imgs } from '../../data/cate_content.js'
export default function Categories() {

  const r = useRouter();

  //retrieve the page variable from the url
  const { page, type } = r.query;

  if (page === '3') {
    return <div>
      <h1>this is the end</h1>
      <button onClick={
        () => r.push("/categories")
      }>Restart</button>
    </div>
  }

  return <div>
    <h1>Categories - #{page} - {type}</h1>
    <button onClick={
      () => console.log(r)
    }>Console log the router</button>

    <button onClick={
      () => r.push("/")
    }>Try Router</button>

    <button onClick={
      () => r.replace({
        pathname: "/categories",
        query: {
          //if page is undefined then page:1, else page:Number(page)+1
          page: page === undefined ? 1 : Number(page) + 1,
          type: "sports"
        }
      })
    }>Replace</button>

    <hr />

    <div>
      {
        type === undefined ? <h1>Choose a Category</h1> : <h3>{header}{type}</h3>
      }
      {/* <h1>{header}</h1> */}
      {/* populate the ui with the 3rd category data */}
      <div>
        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat1.route
            }
          })
        }>{cat1.title}</div>

        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat2.route
            }
          })
        }>{cat2.title}</div>

        <div onClick={
          () => r.push({
            pathname: "/categories",
            query: {
              type: cat3.route
            }
          })
        }>{cat3.title}</div>

      </div>

      {
        type === 'fo' && <div>
          show all the food pictures

          {
            //<Display arr={cat1Imgs}/>
            // cat1Imgs.map((o, i) => <img src={o} height={100} />)
          }
          <Display arr={cat1Imgs}/>
        </div>
      }
      {
        type === 'an' && <div>
          show all the animal pictures

          {
            // cat2Imgs.map((o, i) => <img src={o} height={100} />)
          }
           <Display arr={cat2Imgs}/>
        </div>
      }
      {
        type === 'ph' && <div>
          show all the phone pictures

          {
            // cat3Imgs.map((o, i) => <img src={o} height={100} />)
          }
           <Display arr={cat3Imgs}/>
        </div>
      }
    </div>
  </div>
}
/*
Shortcuts
1. ? :  
  - boolean condition ? value1 : value2 
  - if boolean condition is true, use value1, else use value2
  - value can be both data types (int, string, array, etc) AND UI Elements (<div>,<h1>, etc)
2. &&
  - boolean condition && value
  - if boolean is true, then use value
3. ||
  - value1 || value2
  - if value1 is usable, use it. otherwise, use value2 
*/