export const header = "Answer these questions!";

export const qs = [
    {
    title: "how u doing",
    ops: ["good", "bad" ]
    },
    {
    title: "how u feeling",
    ops: ["happy", "sad", "mad"]
    },
    {
    title: "what u wanna do today",
    ops: ["do nothing," , "go running"]
    }
]

export const rs = {
    good:{
        text: [
            "great to hear that you're feeling good",
            "i love ur positive attitude"
        ],
        img: "https:/placekitten.com/200/200"
    }
}

// we store the answers from the ui
var answers = [];
export function ChangeAnswers(n, qnum){
    answers[qnum] = n;
    console.log(answers);
}

export function GetAnswers(){
    return answers;
}

// we stare the name from the ui
var name = '';

export function ChangeName(n){
    name = n;
    console.log(name);
}

export function GetName(){
    return name;
}