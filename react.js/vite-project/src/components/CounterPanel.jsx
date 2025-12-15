export default function CounterPanel({ data }) {
  return (
    <div className="box">
      <h3>Real-Time Count</h3>

      <p>Total Characters: {data.charCount}</p>
      <p>Total Words: {data.wordCount}</p>

      <p
        style={{
          color: data.isLimitReached ? "red" : data.is80Reached ? "orange" : "black",
        }}
      >
        Remaining: {data.remaining}
      </p>
    </div>
  );
}
