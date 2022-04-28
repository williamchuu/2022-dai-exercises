import { allresults } from "../../data/res_content";
import { useRouter} from 'next/router';
export default function Results(){

    const r = useRouter();
    const {item} = r.query;

    if (item === undefined){
        return <div>
            can't find anything
        </div>
    }

    return <div>
        <h1>
            {/* //allresults['salad'].header
            //allresults.salad.header
            //allresults.item.header they will think item is a key and not an object */}
            {allresults[item].header}
        </h1>
        <img src={allresults[item].img}/>
    </div>
}