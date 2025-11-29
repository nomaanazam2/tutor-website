import React, { useState, useEffect } from "react";
import {
  X,
  Gamepad2,
  Zap,
  Brain,
  Search,
  Trophy,
  RotateCcw,
  Timer,
  Star,
} from "lucide-react";

const MathGamesModal = ({ handleClose }) => {
  const [activeGame, setActiveGame] = useState("menu"); // menu, speed, memory, logic

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-slate-900 w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-700 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Arcade Header */}
        <div className="bg-slate-950 p-6 flex justify-between items-center shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Gamepad2 className="text-white" size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                MATH ARCADE
              </h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                Level Up Your Brain
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Game Area */}
        <div className="flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-900 p-6 md:p-10 flex items-center justify-center">
          {activeGame === "menu" && (
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
              <GameCard
                title="Turbo Tables"
                desc="Race against the clock! Solve as many equations as you can in 30 seconds."
                icon={<Zap size={40} className="text-yellow-400" />}
                color="yellow"
                onClick={() => setActiveGame("speed")}
              />
              <GameCard
                title="Brain Match"
                desc="Find the pairs! Match equivalent fractions, decimals, and percentages."
                icon={<Brain size={40} className="text-pink-400" />}
                color="pink"
                onClick={() => setActiveGame("memory")}
              />
              <GameCard
                title="Logic Detective"
                desc="Guess the mystery number using 'Higher' or 'Lower' clues."
                icon={<Search size={40} className="text-cyan-400" />}
                color="cyan"
                onClick={() => setActiveGame("logic")}
              />
            </div>
          )}

          {activeGame === "speed" && (
            <SpeedMathGame onBack={() => setActiveGame("menu")} />
          )}
          {activeGame === "memory" && (
            <MemoryMatchGame onBack={() => setActiveGame("menu")} />
          )}
          {activeGame === "logic" && (
            <LogicDetectiveGame onBack={() => setActiveGame("menu")} />
          )}
        </div>
      </div>
    </div>
  );
};

// --- GAME 1: SPEED MATH (Turbo Tables) ---
const SpeedMathGame = ({ onBack }) => {
  const [gameState, setGameState] = useState("start"); // start, playing, end
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [question, setQuestion] = useState({ q: "", a: 0 });
  const [userAnswer, setUserAnswer] = useState("");

  // Generate Question
  const generateQuestion = () => {
    const ops = ["+", "-", "*"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;

    let q = "",
      a = 0;
    if (op === "+") {
      q = `${num1} + ${num2}`;
      a = num1 + num2;
    }
    if (op === "-") {
      q = `${num1 + num2} - ${num2}`;
      a = num1;
    } // Ensure positive
    if (op === "*") {
      q = `${num1} × ${num2}`;
      a = num1 * num2;
    }

    setQuestion({ q, a });
  };

  // Timer Logic
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState("end");
    }
  }, [gameState, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameState("playing");
    generateQuestion();
    setUserAnswer("");
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === question.a) {
      setScore(score + 10);
      generateQuestion();
      setUserAnswer("");
    } else {
      // Shake effect logic could go here
      setUserAnswer("");
    }
  };

  return (
    <div className="w-full max-w-lg text-center">
      {gameState === "start" && (
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
          <Zap
            size={64}
            className="text-yellow-400 mx-auto mb-6 animate-pulse"
          />
          <h3 className="text-3xl font-bold text-white mb-2">
            Ready for Turbo Tables?
          </h3>
          <p className="text-slate-400 mb-8">
            You have 30 seconds. Speed is key!
          </p>
          <button
            onClick={startGame}
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-12 rounded-xl text-xl transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            START GAME
          </button>
          <button
            onClick={onBack}
            className="block mt-6 text-slate-500 hover:text-white mx-auto text-sm"
          >
            Back to Menu
          </button>
        </div>
      )}

      {gameState === "playing" && (
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
          <div className="flex justify-between items-center mb-8 text-white">
            <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg">
              <Timer size={20} className="text-yellow-400" />
              <span className="font-mono text-xl font-bold">{timeLeft}s</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg">
              <Trophy size={20} className="text-yellow-400" />
              <span className="font-mono text-xl font-bold">{score}</span>
            </div>
          </div>

          <div className="text-6xl font-bold text-white mb-8 font-mono">
            {question.q}
          </div>

          <form onSubmit={checkAnswer}>
            <input
              type="number"
              autoFocus
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full bg-slate-900 border-2 border-slate-600 text-white text-center text-4xl py-4 rounded-xl focus:border-yellow-500 outline-none mb-6 font-mono"
              placeholder="?"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {gameState === "end" && (
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center animate-in zoom-in">
          <Trophy size={64} className="text-yellow-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">Time's Up!</h3>
          <p className="text-slate-400 mb-6">Final Score</p>
          <div className="text-6xl font-black text-white mb-8">{score}</div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={startGame}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-xl flex items-center gap-2"
            >
              <RotateCcw size={20} /> Play Again
            </button>
            <button
              onClick={onBack}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl"
            >
              Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- GAME 2: MEMORY MATCH ---
const MemoryMatchGame = ({ onBack }) => {
  // Card Data: Matches pairs like "50%" and "1/2"
  const PAIRS = [
    { id: 1, val: "1/2", match: 1 },
    { id: 2, val: "50%", match: 1 },
    { id: 3, val: "1/4", match: 2 },
    { id: 4, val: "0.25", match: 2 },
    { id: 5, val: "3/4", match: 3 },
    { id: 6, val: "75%", match: 3 },
    { id: 7, val: "1/10", match: 4 },
    { id: 8, val: "0.1", match: 4 },
    { id: 9, val: "1", match: 5 },
    { id: 10, val: "100%", match: 5 },
    { id: 11, val: "1/5", match: 6 },
    { id: 12, val: "0.2", match: 6 },
  ];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  // Shuffle on mount
  useEffect(() => {
    const shuffled = [...PAIRS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const handleCardClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(cards[index].match)
    )
      return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const card1 = cards[newFlipped[0]];
      const card2 = cards[newFlipped[1]];

      if (card1.match === card2.match) {
        setMatched([...matched, card1.match]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const isGameOver = matched.length === PAIRS.length / 2;

  return (
    <div className="w-full max-w-2xl" style={{ maxWidth: "66%" }}>
      <div className="flex justify-between items-center mb-6 text-white bg-slate-800 p-4 rounded-xl">
        <h3 className="font-bold flex items-center gap-2">
          <Brain className="text-pink-400" /> Brain Match
        </h3>
        <div className="font-mono bg-slate-900 px-3 py-1 rounded">
          Moves: {moves}
        </div>
        <button
          onClick={onBack}
          className="text-sm text-slate-400 hover:text-white"
        >
          Exit
        </button>
      </div>

      {isGameOver ? (
        <div className="text-center bg-slate-800 p-10 rounded-3xl animate-in zoom-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            Memory Master! 🎉
          </h2>
          <p className="text-slate-400 mb-6">
            You cleared the board in {moves} moves.
          </p>
          <button
            onClick={onBack}
            className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 px-8 rounded-xl"
          >
            Back to Arcade
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, idx) => {
            const isFlipped =
              flipped.includes(idx) || matched.includes(card.match);
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`aspect-square rounded-xl cursor-pointer transition-all duration-500 transform ${
                  isFlipped
                    ? "rotate-y-180 bg-white"
                    : "bg-indigo-600 hover:bg-indigo-500"
                } flex items-center justify-center shadow-lg`}
                style={{ perspective: "1000px" }}
              >
                {isFlipped ? (
                  <span className="text-xl font-bold text-slate-800">
                    {card.val}
                  </span>
                ) : (
                  <Brain className="text-white/20" size={32} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- GAME 3: LOGIC DETECTIVE ---
const LogicDetectiveGame = ({ onBack }) => {
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const num = parseInt(guess);
    if (!num) return;

    let hint = "";
    if (num < target) hint = "Too Low! ⬆️";
    if (num > target) hint = "Too High! ⬇️";
    if (num === target) {
      hint = "Correct! 🎉";
      setGameOver(true);
    }

    setHistory([{ num, hint }, ...history]);
    setGuess("");
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setHistory([]);
    setGameOver(false);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="text-center mb-6">
          <Search size={48} className="text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Logic Detective
          </h3>
          <p className="text-slate-400 text-sm">
            I'm thinking of a number between 1 and 100.
          </p>
        </div>

        {!gameOver ? (
          <form onSubmit={handleGuess} className="mb-6 flex gap-2">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="flex-1 bg-slate-900 border-2 border-slate-600 text-white px-4 py-3 rounded-xl focus:border-cyan-500 outline-none"
              placeholder="Enter 1-100"
              autoFocus
            />
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 rounded-xl transition-colors"
            >
              Guess
            </button>
          </form>
        ) : (
          <div className="text-center mb-6 animate-bounce">
            <div className="text-green-400 font-bold text-xl mb-4">
              You found the number {target}!
            </div>
            <button
              onClick={resetGame}
              className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg"
            >
              Play Again
            </button>
          </div>
        )}

        <div className="bg-slate-900 rounded-xl p-4 h-48 overflow-y-auto custom-scrollbar border border-slate-800">
          <h4 className="text-slate-500 text-xs font-bold uppercase mb-3 sticky top-0 bg-slate-900">
            Mission Log
          </h4>
          {history.length === 0 && (
            <div className="text-slate-600 text-center text-sm italic mt-10">
              Start guessing...
            </div>
          )}
          <div className="space-y-2">
            {history.map((entry, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0"
              >
                <span className="text-white font-mono font-bold">
                  Guess: {entry.num}
                </span>
                <span
                  className={`${
                    entry.hint.includes("Correct")
                      ? "text-green-400"
                      : entry.hint.includes("Low")
                      ? "text-yellow-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {entry.hint}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-6 text-slate-500 hover:text-white text-sm"
        >
          Exit Mission
        </button>
      </div>
    </div>
  );
};

// --- HELPER: GAME CARD ---
const GameCard = ({ title, desc, icon, color, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-slate-800 border-2 border-slate-700 hover:border-${color}-500 p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl group`}
  >
    <div
      className={`w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    <div
      className={`mt-6 text-${color}-400 font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}
    >
      Play Now <Search size={16} />
    </div>
  </div>
);

export default MathGamesModal;
