function h(obj, propsName) {
  let answer = '';
  for (let x in obj) {
    if (x === propsName) {
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

h(obj, propsName);
