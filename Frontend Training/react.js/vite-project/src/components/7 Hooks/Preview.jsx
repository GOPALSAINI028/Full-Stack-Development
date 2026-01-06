export default function Preview({ text }) {
  return (
    <div className="box">
      <h3>Live Preview</h3>
      <p>{text || "Start typing to see preview..."}</p>
    </div>
  );
}
