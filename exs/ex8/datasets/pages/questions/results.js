import {GetAnswers, GetName, rs} from "../../data/que_content.js"
export default function QResults(){

    const nm = GetName();
    const an = GetAnswers();
    return <div>
        here are your results
        <div>
            hi {nm}, i see that you are doing {an[0]}, and you are feeling {an[1]}. this is why you are going to {an[2]}. is this right?
        </div>

        
        {/* <h3>
           {rs[an[0]].text[
               Math.round(Math.random().random*rs[an[0].length])
           ]}
        </h3> */}
        {/* <img src={rs[an[0]].img} /> */}
            
        
    </div>
}