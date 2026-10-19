import Link from "next/link";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <p className="footerMark">
          Christian Tomas Ocampo <span aria-hidden="true">·</span> San Jose, CA
        </p>
        <nav className="footerNav" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
          <a target="_blank" rel="noopener noreferrer" href="mailto:chris0112tomas@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
