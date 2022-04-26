makeAttemptList = (htmlElement) => {
  let attemptList = [];

  for (let i = 0, element; (element = htmlElement.elements[i++]); ) {
    if (element.type === "number") {
      attemptList.push(element.value);
    }
  }
  return attemptList;
};


generateInput = (size, htmlElement) => {
  let html = "";
  for (let i = 0; i < size; i++) {
    html += `<input type="number" id="num${i}" onKeyUp="if(this.value > 9){this.value = Number(String(this.value)[0])}else if(this.value < 0){this.value = Number(String(this.value)[1]);}" required>`;
  }
  html += `<br><input type="submit" value="Guess">`;

  htmlElement.innerHTML = html;
};

cleanInput = (htmlElement) => {
  for (let i = 0, element; (element = htmlElement.elements[i++]); ) {
    if (element.type === "number") {
      element.value = "";
    }
  }
};

const attempts = document.getElementById("attempts");

generateAttemptHistory = (attempt, secret) => {
  let html = "<section>";

  let yellow = "#bfa75d";
  let green = "#009246";

  let size = attempt.length;

  for (let i = 0; i < size; i++) {
    if (secret[i] == +attempt[i]) {
      html += `<input type="number" style="background-color:${green};" value="${attempt[i]}" readonly>`;
    } else if (secret.includes(+attempt[i])) {
      html += `<input type="number" style="background-color:${yellow};" value="${attempt[i]}" readonly>`;
    } else {
      html += `<input type="number" value="${attempt[i]}" readonly>`;
    }
  }

  html += `</section>`;

  attempts.innerHTML += html;
};

const input = document.getElementById("input");

generateInput(5, input);

generateSecretCode = (l, max) => {
  let numbers = [...Array(max).keys()];
  for(var j, x, i = numbers.length; i; j = parseInt(Math.random() * i), x = numbers[--i], numbers[i] = numbers[j], numbers[j] = x);
  return numbers.slice(l);
}

let secretCode = generateSecretCode(5, 10);

game = (event) => {
  event.preventDefault();

  const attempt = makeAttemptList(input);
  generateAttemptHistory(attempt, secretCode);
  cleanInput(input);
};

input.addEventListener("submit", game);

