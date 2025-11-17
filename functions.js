// ---------- Demo A ----------
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greetOutput = document.getElementById('greetOutput');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim() || 'Guest';
  greetOutput.textContent = `Hello, ${name}!`;
});

// ---------- Demo B (Skills Array) ----------
let skills = [];
const skillsDisplay = document.getElementById('skillsDisplay');
const skillsResult = document.getElementById('skillsResult');
const skillValue = document.getElementById('skillValue');
const skillIndex = document.getElementById('skillIndex');

function renderSkills() {
  skillsDisplay.textContent = JSON.stringify(skills, null, 2);
}
function setSkillsResult(msg) {
  skillsResult.textContent = msg;
}
function val() { return skillValue.value.trim(); }
function idx() { return parseInt(skillIndex.value); }

document.getElementById('pushBtn').onclick = () => {
  if (!val()) return setSkillsResult("Enter a value first");
  skills.push(val());
  renderSkills();
  setSkillsResult(`pushed "${val()}"`);
};

document.getElementById('unshiftBtn').onclick = () => {
  if (!val()) return setSkillsResult("Enter a value first");
  skills.unshift(val());
  renderSkills();
  setSkillsResult(`unshifted "${val()}"`);
};

document.getElementById('popBtn').onclick = () => {
  const x = skills.pop();
  renderSkills();
  setSkillsResult(`popped "${x}"`);
};

document.getElementById('shiftBtn').onclick = () => {
  const x = skills.shift();
  renderSkills();
  setSkillsResult(`shifted "${x}"`);
};

document.getElementById('spliceInsertBtn').onclick = () => {
  skills.splice(idx(), 0, val());
  renderSkills();
  setSkillsResult(`inserted "${val()}"`);
};

document.getElementById('spliceReplaceBtn').onclick = () => {
  skills.splice(idx(), 1, val());
  renderSkills();
  setSkillsResult(`replaced at ${idx()} with "${val()}"`);
};

document.getElementById('spliceRemoveBtn').onclick = () => {
  skills.splice(idx(), 1);
  renderSkills();
  setSkillsResult(`removed index ${idx()}`);
};

document.getElementById('includesBtn').onclick = () => {
  setSkillsResult(`includes("${val()}") → ${skills.includes(val())}`);
};

document.getElementById('indexOfBtn').onclick = () => {
  setSkillsResult(`indexOf("${val()}") → ${skills.indexOf(val())}`);
};

document.getElementById('concatBtn').onclick = () => {
  const arr = skills.concat(['Bootstrap']);
  setSkillsResult(`concat result: ${JSON.stringify(arr)}`);
};

document.getElementById('spreadBtn').onclick = () => {
  const arr = [...skills, 'Tailwind'];
  setSkillsResult(`spread result: ${JSON.stringify(arr)}`);
};

document.getElementById('joinBtn').onclick = () => {
  const sep = document.getElementById('joinSep').value || ', ';
  setSkillsResult(skills.join(sep));
};

document.getElementById('sliceBtn').onclick = () => {
  const s = parseInt(document.getElementById('sliceStart').value);
  const e = parseInt(document.getElementById('sliceEnd').value);
  const res = skills.slice(isNaN(s)?undefined:s, isNaN(e)?undefined:e);
  setSkillsResult(JSON.stringify(res));
};

document.getElementById('resetSkillsBtn').onclick = () => {
  skills = [];
  renderSkills();
  setSkillsResult("reset to empty");
};

renderSkills();

// ---------- Demo C (Numbers Array) ----------
const baseNumbers = [1,3,22,53,8,140,7,9,1000,333,999,555,444,577];
let numbers = [...baseNumbers];
const numDisplay = document.getElementById('numbersDisplay');
const numResult = document.getElementById('numbersResult');
const numInput = document.getElementById('numInput');
const addNumBtn = document.getElementById('addNumBtn');

function renderNums() {
  numDisplay.textContent = JSON.stringify(numbers, null, 2);
}
function setNumRes(msg) {
  numResult.textContent = msg;
}

// add number manually
addNumBtn.onclick = () => {
  const val = Number(numInput.value);
  if (isNaN(val)) return setNumRes("Enter a valid number");
  numbers.push(val);
  renderNums();
  setNumRes(`Added ${val}`);
  numInput.value = '';
};

// functions
document.getElementById('mapBtn').onclick = () => setNumRes(JSON.stringify(numbers.map(n => n*n)));
document.getElementById('filterBtn').onclick = () => setNumRes(JSON.stringify(numbers.filter(n => n%2===0)));
document.getElementById('reduceBtn').onclick = () => setNumRes("sum = " + numbers.reduce((a,b)=>a+b,0));
document.getElementById('findBtn').onclick = () => setNumRes("first > 100 = " + numbers.find(n=>n>100));
document.getElementById('someBtn').onclick = () => setNumRes("some > 500 = " + numbers.some(n=>n>500));
document.getElementById('everyBtn').onclick = () => setNumRes("every < 2000 = " + numbers.every(n=>n<2000));
document.getElementById('sortAscBtn').onclick = () => { numbers.sort((a,b)=>a-b); renderNums(); };
document.getElementById('sortDescBtn').onclick = () => { numbers.sort((a,b)=>b-a); renderNums(); };
document.getElementById('reverseBtn').onclick = () => { numbers.reverse(); renderNums(); };
document.getElementById('maxBtn').onclick = () => setNumRes("max = " + Math.max(...numbers));
document.getElementById('minBtn').onclick = () => setNumRes("min = " + Math.min(...numbers));
document.getElementById('uniqueBtn').onclick = () => setNumRes(JSON.stringify([...new Set(numbers)]));
document.getElementById('numJoinBtn').onclick = () => {
  const sep = document.getElementById('numJoinSep').value || ', ';
  setNumRes(numbers.join(sep));
};
document.getElementById('resetNumsBtn').onclick = () => {
  numbers = [...baseNumbers];
  renderNums();
  setNumRes("-");
};

renderNums();
