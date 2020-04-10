const solution = (participant, completion) => {
    participant.sort();
    completion.sort();
    while(participant.length) {
        let participants = participant.pop();
        if(participants !== completion.pop()) {
            return participants;
        }
    }
}
let participant = ['filipa', 'josipa', 'marina', 'nikola', 'vinko'];
let completion = ['filipa','josipa', 'marina', 'nikola', 'vinko', 'vinko'];

solution(participant, completion);