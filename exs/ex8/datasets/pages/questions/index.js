import { GetName, qs} from "../../data/que_content"
import Options from '../../comps/Question/Options';
import { useRouter } from 'next/router';

export default function Questions() {

  const r = useRouter();
  var { qnum } = r.query;

  if (qnum === undefined) {
    qnum = 0;
  }
  const nm = GetName();

  return <div>
    <h1>hi {nm},</h1>
    Answer some questions
    <Options
      q={qs[qnum].title}
      arr={qs[qnum].ops}
    />

    {
      Number(qnum) < qs.length - 1 &&
      <button onClick={() => r.push({
        pathname: "/questions",
        query: {
          qnum: Number(qnum) + 1 > qs.length - 1 ? qs.length - 1 : Number(qnum) + 1 // makes it so that if the number is bigger than 2, use 2. it will never go beyond 2
        }
      })
      }>next question</button>
    }
    {
      Number(qnum) >= qs.length-1 &&
      <button onClick={
        ()=>r.push("/questions/results")
      }>go to results</button>
    }
  </div>
}