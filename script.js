let quizPool = [];
let currentIdx = 0;
let userAnswers = {};
let timer = null;
let timeLeft = 30;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToRes = document.getElementById('back-to-res');
const clearHistoryBtn = document.getElementById('clear-history');

const qNum = document.getElementById('q-num');
const qText = document.getElementById('q-text');
const optionsBox = document.getElementById('options-box');
const timerDisplay = document.getElementById('timer');
const timerBar = document.getElementById('timer-bar');

const historyBox = document.getElementById('history-box');
const historyScore = document.getElementById('history-score');
const historyBadge = document.getElementById('history-badge');

window.addEventListener('DOMContentLoaded', () => {
    loadHistory();

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
    restartBtn.addEventListener('click', resetQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToRes.addEventListener('click', hideReview);
    clearHistoryBtn.addEventListener('click', clearLocalStorage);
});

function shuffle(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    let shuffled = shuffle(questionsData);
    quizPool = shuffled.slice(0, 10).map(q => {
        return {
            ...q,
            options: shuffle(q.options)
        };
    });

    currentIdx = 0;
    userAnswers = {};

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerUI();
    startTimer();

    let currentQ = quizPool[currentIdx];
    qNum.textContent = `Question ${currentIdx + 1} / 10`;
    qText.textContent = currentQ.question;
    optionsBox.innerHTML = '';

    currentQ.options.forEach((opt, optIndex) => {
        let isChosen = userAnswers[currentIdx] === optIndex;

        let btn = document.createElement('button');
        btn.className = `w-full text-left p-3 rounded-lg border text-xs transition flex justify-between items-center ${
            isChosen 
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' 
                : 'bg-gray-950 border-gray-800 text-gray-300 hover:bg-gray-800'
        }`;

        btn.innerHTML = `
            <span>${opt.text}</span>
            <span class="w-4 h-4 rounded-full border border-gray-700 flex items-center justify-center text-[10px] ${isChosen ? 'bg-cyan-400 border-cyan-400 text-gray-950 font-bold' : ''}">
                ${isChosen ? '✓' : ''}
            </span>
        `;

        btn.addEventListener('click', () => {
            userAnswers[currentIdx] = optIndex;
            loadQuestion();
        });

        optionsBox.appendChild(btn);
    });

    prevBtn.disabled = currentIdx === 0;
    nextBtn.textContent = currentIdx === quizPool.length - 1 ? 'Finish' : 'Next';
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNext();
        }
    }, 1000);
}

function updateTimerUI() {
    timerDisplay.textContent = `${timeLeft}s`;
    let pct = (timeLeft / 30) * 100;
    timerBar.style.width = `${pct}%`;
}

function handleNext() {
    clearInterval(timer);
    if (currentIdx < quizPool.length - 1) {
        currentIdx++;
        loadQuestion();
    } else {
        showResults();
    }
}

function handlePrev() {
    clearInterval(timer);
    if (currentIdx > 0) {
        currentIdx--;
        loadQuestion();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let totalScore = 0;
    quizPool.forEach((q, index) => {
        let chosen = userAnswers[index];
        if (chosen !== undefined) {
            totalScore += q.options[chosen].score;
        }
    });

    document.getElementById('final-score').textContent = totalScore;

    document.getElementById('light-red').className = 'traffic-light bg-red-950/30';
    document.getElementById('light-yellow').className = 'traffic-light bg-yellow-950/30';
    document.getElementById('light-green').className = 'traffic-light bg-green-950/30';

    let badgeBox = document.getElementById('badge-box');
    let resTitle = document.getElementById('res-title');
    let resDesc = document.getElementById('res-desc');
    let tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = '';

    let badgeText = '';
    let badgeClass = '';
    let tips = [];

    if (totalScore >= 16) {
        document.getElementById('light-green').classList.add('glow-green');
        badgeText = 'Production Ready 🟢';
        badgeClass = 'bg-green-500/10 text-green-400 border border-green-500/20';
        resTitle.textContent = 'Great Architecture Habits!';
        resDesc.textContent = 'Your coding practices show strong understanding of clean code, async handling, and modular structure.';
        tips = ['Keep writing modular components', 'Explore advanced performance profiling'];
    } else if (totalScore >= 10) {
        document.getElementById('light-yellow').classList.add('glow-yellow');
        badgeText = 'Needs Refactoring 🟡';
        badgeClass = 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
        resTitle.textContent = 'Decent, but room for cleanup';
        resDesc.textContent = 'Your code works, but has some technical debt regarding error boundaries or optimization.';
        tips = ['Always wrap async API calls in try/catch', 'Watch out for DOM reflow overhead'];
    } else {
        document.getElementById('light-red').classList.add('glow-red');
        badgeText = 'Refactor Now 🔴';
        badgeClass = 'bg-red-500/10 text-red-400 border border-red-500/20';
        resTitle.textContent = 'High Technical Debt Detected';
        resDesc.textContent = 'Critical issues with error handling, security, or DOM performance found.';
        tips = ['Stop ignoring console errors and unhandled promises', 'Separate logic from view files'];
    }

    badgeBox.textContent = badgeText;
    badgeBox.className = `mt-3 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${badgeClass}`;

    tips.forEach(t => {
        let li = document.createElement('li');
        li.textContent = `• ${t}`;
        tipsList.appendChild(li);
    });

    saveHistory(totalScore, badgeText);
}

function showReview() {
    resultScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');

    let box = document.getElementById('review-box');
    box.innerHTML = '';

    quizPool.forEach((q, i) => {
        let chosenOptIdx = userAnswers[i];
        let chosenOpt = chosenOptIdx !== undefined ? q.options[chosenOptIdx] : { text: 'Skipped', score: 0 };
        let bestOpt = q.options.find(o => o.score === 2) || q.options[0];

        let div = document.createElement('div');
        div.className = 'bg-gray-950 p-2.5 rounded border border-gray-800 space-y-1';
        div.innerHTML = `
            <p class="font-medium text-gray-200">${i + 1}. ${q.question}</p>
            <p class="text-gray-400">You picked: <span class="${chosenOpt.score === 2 ? 'text-green-400' : 'text-red-400'}">${chosenOpt.text}</span></p>
            ${chosenOpt.score !== 2 ? `<p class="text-green-400/80">Best choice: ${bestOpt.text}</p>` : ''}
        `;
        box.appendChild(div);
    });
}

function hideReview() {
    reviewScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

function resetQuiz() {
    clearInterval(timer);
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

const LS_KEY = 'dev_checker_history';

function saveHistory(score, badge) {
    let data = {
        score: score,
        badge: badge,
        date: new Date().toLocaleDateString()
    };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
    loadHistory();
}

function loadHistory() {
    let saved = localStorage.getItem(LS_KEY);
    if (saved) {
        let parsed = JSON.parse(saved);
        historyScore.textContent = `${parsed.score}/20 (${parsed.date})`;
        historyBadge.textContent = parsed.badge;
        
        if (parsed.badge.includes('Ready')) {
            historyBadge.className = 'ml-2 px-1.5 py-0.5 rounded font-semibold bg-green-500/10 text-green-400 border border-green-500/20';
        } else if (parsed.badge.includes('Refactoring')) {
            historyBadge.className = 'ml-2 px-1.5 py-0.5 rounded font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
        } else {
            historyBadge.className = 'ml-2 px-1.5 py-0.5 rounded font-semibold bg-red-500/10 text-red-400 border border-red-500/20';
        }

        historyBox.classList.remove('hidden');
    } else {
        historyBox.classList.add('hidden');
    }
}

function clearLocalStorage() {
    localStorage.removeItem(LS_KEY);
    historyBox.classList.add('hidden');
}