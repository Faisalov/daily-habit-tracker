function addHabit() {
    const input = document.getElementById("input");
    const inputText = input.value.trim();
    if(inputText === "") return;

    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.push(inputText);
    localStorage.setItem("habits", JSON.stringify(habits));
    input.value = "";

    showHabits();
};

function showHabits() {
    const habitList = document.getElementById("add-habit");
    habitList.innerHTML = "";
    const habits = JSON.parse(localStorage.getItem("habits")) || [];

    habits.forEach((habit, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${habit} <button onclick="removeHabit()">Remove Habit</button>`;
        habitList.appendChild(li);
    });
};

function removeHabit(index) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));

    showHabits();
};

function clearHabit() {
    localStorage.removeItem("habits");
    showHabits();
};

showHabits();
