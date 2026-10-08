const contacts = [
  { label: "tejovanth904@gmail.com", href: "mailto:tejovanth904@gmail.com" },
  { label: "+44 7448986077", href: "tel:+447448986077" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/tejovanth-k", external: true },
  { label: "GitHub ↗", href: "https://github.com/Tejovanth111/", external: true },
] as const;

export default function SocialLinks({ className }: { className: string }) {
  return (
    <nav className={className} aria-label="Contact and professional profiles">
      {contacts.map(({ label, href, ...props }, index) => (
        <span className="contact-link-item" key={label}>
          {index > 0 && <span className="contact-separator" aria-hidden="true">·</span>}
          <a href={href} aria-label={label} {...("external" in props && props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</a>
        </span>
      ))}
    </nav>
  );
}
