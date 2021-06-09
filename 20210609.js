function h(obj, target) {
  let answer = '';
  for (let x in obj) {
    if (x === target) {
      answer = obj[x];
    }
  }
  return answer;
}

const obj = {
  default: 'header',
  foot: 'footer',
  contents: 'contents',
};
const PropsTarget = 'foot';

h(obj, target);
