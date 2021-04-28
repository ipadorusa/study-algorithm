function solution(participant, completion) {
    let n = completion.reduce((acc, cur) => {
        return acc[cur] = acc[cur] ? acc[cur] + 1 : 1, acc
    }, {});
    return participant.find(val => {
        if(n[val]) {
            n[val] = n[val] - 1
        }else {
            return true
        }
    })
}

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"]
solution(participant, completion);
