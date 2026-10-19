"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const closeMenu = () => {
    setOpen(false);
    if (open) toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    // Wait for the disclosure's visibility styles before moving focus.
    let focusFrame;
    const frame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => {
        navRef.current?.querySelector("a")?.focus();
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      if (focusFrame !== undefined) cancelAnimationFrame(focusFrame);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 721px)");
    const handleResize = () => {
      if (desktop.matches) {
        if (document.activeElement === toggleRef.current) {
          navRef.current?.querySelector("a")?.focus();
        }
        setOpen(false);
      } else if (navRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
    };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  return (
    <header
      className="siteHeader"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          closeMenu();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="headerInner">
        <Link href="/" className="monogram" aria-label="CTO - home">
          CTO
        </Link>

        <nav ref={navRef} id="main-navigation" className={`siteNav${open ? " isOpen" : ""}`} aria-label="Main">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`navLink${pathname === href ? " isActive" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <a
            className="resumeBtn"
            href="/Christian-Tomas-Ocampo-Resume.pdf"
            target="_blank" rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`menuToggle${open ? " isOpen" : ""}`}
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
