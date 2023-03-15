let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

let prev = 0;
const numbersNew = [...numbers];

// for (let i = 0; i < len; i++) {
//   let index = Math.floor(Math.random() * numbers.length);
//   numbersNew.push(numbers[index]);
//   let before = numbers.slice(0, index);
//   let after = numbers.slice(index + 1);
//   numbers = before.concat(after);
// }
numbersNew.sort(() => Math.random() - 0.5);

console.log(numbersNew);

function generator(field) {
  for (let i = 0; i < numbersNew.length; i++) {
    const rect = document.createElement('div');
    rect.className = 'field__rect';
    rect.textContent = numbersNew[i];
    rect.onclick = currentChecker;
    field.append(rect);
  }
}

function startGame() {
  const field = document.getElementById('field');
  field.style.display = 'flex';
  field.textContent = '';
  const btn = document.getElementById('btn');
  btn.style.display = 'none';
  const timer = document.getElementById('timer');
  timer.style.display = 'block';
  timer.textContent = '110';
  const restart = document.getElementById('restart');
  restart.style.display = 'block';
  window.timerId = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    if (timer.textContent == 0) {
      alert('Time is ower');
      clearInterval(timerId);
    }
  }, 1000);

  generator(field);

  // for (let i = 0; i < numbersNew.length; i++) {
  //   const rect = document.createElement('div');
  //   rect.className = 'field__rect';
  //   rect.textContent = numbersNew[i];
  //   rect.onclick = currentChecker;
  //   field.append(rect);
  // }
}

function resetGame() {
  clearInterval(timerId);
  const field = document.getElementById('field');
  field.textContent = '';
  field.style.display = 'none';
  const timer = document.getElementById('timer');
  timer.style.display = 'none';
  const restart = document.getElementById('restart');
  restart.style.display = 'none';
  const btn = document.getElementById('btn');
  btn.style.display = 'block';
  // startGame();
}

function currentChecker() {
  if (this.textContent - 1 === prev && this.textContent == 25) {
    this.classList.add('green');
    alert('Игра завершена, вы выиграли!');
    clearInterval(timerId);
    prev += 1;
  } else if (this.textContent - 1 === prev) {
    this.classList.add('green');
    prev += 1;
  } else {
    this.classList.add('red');
    setTimeout(() => {
      this.classList.remove('red');
    }, 500);
  }
}
