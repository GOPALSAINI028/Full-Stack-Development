export default function AnalysisPanel({ data }) {
  return (
    <div className="box">
      <h3>Analysis Summary</h3>

      <p>Special Characters: {data.specialCount}</p>
      <p>Limit Reached: {data.isLimitReached ? "Yes" : "No"}</p>
    </div>
  );
}
