function App() {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-black to-gray-500"
    >
      <Rating rate={1} />
    </div>
  );
}

function Rating({ rate }) {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const rateInt = Math.floor(rate);
  const emojiPattern = ["", "😭", "🥲", "🤨", "🙂", "😀"];

  const emojis =
    `${emojiPattern[rateInt].repeat(rateInt)}` + "😶".repeat(5 - rateInt);

  /* for (let i = 0; i < 5; i++) {
    if (i < rate) {
      emojis[i] = "😁";
    } else {
      emojis[i] = "😔";
    }
  }
  */

  return (
    <>
      <h1 className="text-9xl">{rate.toFixed(1)}</h1>
      <span className="text-9xl">{emojis}</span>
    </>
  );
}

export default App;
