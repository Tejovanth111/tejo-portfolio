const roles = [
  "Business Analyst",
  "Data Analyst",
  "Product Analyst",
  "Decision / Management Scientist",
  "Strategy & Operations Analyst",
  "Analytics Consultant",
] as const;

export default function RolesSection() {
  return (
    <section className="roles-section section-gutter" id="roles" aria-labelledby="roles-title">
      <div className="section-heading-row">
        <p className="eyebrow">PROFESSIONAL DIRECTION</p>
        <span className="section-index">05 / ROLES</span>
      </div>
      <div className="roles-layout">
        <h2 id="roles-title" className="editorial-heading">
          I&apos;m interested in analytics roles close to <em>decision-making.</em>
        </h2>
        <ul className="role-list">
          {roles.map((role, index) => (
            <li key={role}><span>0{index + 1}</span>{role}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
