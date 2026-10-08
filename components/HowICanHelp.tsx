const contributions = [
  "Turn ambiguous questions into analytical problems.",
  "Build reliable analysis from messy data.",
  "Identify commercially meaningful patterns.",
  "Evaluate scenarios before decisions are made.",
  "Communicate complex findings clearly.",
  "Connect analysis to business action.",
] as const;

export default function HowICanHelp() {
  return (
    <section className="help-section section-gutter" id="how-i-can-help" aria-labelledby="help-title">
      <div className="section-heading-row">
        <p className="eyebrow">FROM ANALYSIS TO ACTION</p>
        <span className="section-index">04 / HOW I CAN HELP</span>
      </div>
      <h2 id="help-title" className="editorial-heading">Where analytics<br />can create value.</h2>
      <ol className="contribution-list">
        {contributions.map((contribution, index) => (
          <li key={contribution}>
            <span>0{index + 1}</span>
            <p>{contribution}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
