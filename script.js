let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
let gameOver = false;

// عدادات الفوز والتعادل
let xWins = 0;
let oWins = 0;
let draws = 0;

// عناصر DOM للعداد
const xWinsElement = document.getElementById("x-wins");
const oWinsElement = document.getElementById("o-wins");
const drawsElement = document.getElementById("draws");

// تحديث عرض العداد
function updateScoreBoard() {
  xWinsElement.textContent = xWins;
  oWinsElement.textContent = oWins;
  drawsElement.textContent = draws;
}

// دالة فحص الفائز وتحديث العداد
function winner() {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById('item' + i).textContent;
  }

  function end(num1, num2, num3) {
    gameOver = true;
    title.textContent = squares[num1].toUpperCase() + 
      ' winner! Score - X: ' + xWins + ', O: ' + oWins + ', Draws: ' + draws;

    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    if (squares[num1].toUpperCase() === 'X') {
      xWins++;
    } else if (squares[num1].toUpperCase() === 'O') {
      oWins++;
    }
    updateScoreBoard();

    // لا تعيد تعيين تلقائي، اللاعب يضغط زر إعادة اللعب
  }

  if (
    squares[1] === squares[2] &&
    squares[2] === squares[3] &&
    squares[1] !== ''
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] === squares[5] &&
    squares[5] === squares[6] &&
    squares[4] !== ''
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] === squares[8] &&
    squares[8] === squares[9] &&
    squares[7] !== ''
  ) {
    end(7, 8, 9);
  } else if (
    squares[1] === squares[4] &&
    squares[4] === squares[7] &&
    squares[1] !== ''
  ) {
    end(1, 4, 7);
  } else if (
    squares[2] === squares[5] &&
    squares[5] === squares[8] &&
    squares[2] !== ''
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] === squares[6] &&
    squares[6] === squares[9] &&
    squares[3] !== ''
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] === squares[5] &&
    squares[5] === squares[9] &&
    squares[1] !== ''
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] === squares[5] &&
    squares[5] === squares[7] &&
    squares[3] !== ''
  ) {
    end(3, 5, 7);
  } else if (!squares.includes('')) {
    draws++;
    updateScoreBoard();
    title.textContent = "It's a Draw! Total draws: " + draws;
    // لا تعيد تعيين تلقائي
  }
}

// إعادة تعيين اللعبة عند الضغط على زر "إعادة اللعب"
function resetGame() {
  gameOver = false;
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById('item' + i);
    cell.textContent = '';
    cell.style.background = '#f25';
  }
  title.innerHTML = '<span>X O</span> GAME';
  turn = 'x';
}

// وظيفة اللعب عند الضغط على مربع
function game(id) {
  if (gameOver) return;

  let element = document.getElementById(id);
  if (element.textContent === '') {
    element.textContent = turn.toUpperCase();
    turn = turn === 'x' ? 'o' : 'x';
    title.innerHTML = ' ' + turn.toUpperCase();
    winner();
  }
}

// عرض العداد عند بداية اللعبة
updateScoreBoard();
