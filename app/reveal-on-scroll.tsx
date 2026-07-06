"use client";

import { useEffect, useState } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (items.length && (prefersReducedMotion || !("IntersectionObserver" in window))) {
      items.forEach((item) => item.classList.add("is-visible"));
    }

    let observer: IntersectionObserver | null = null;

    if (items.length && !prefersReducedMotion && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
      );
    }

    if (observer) {
      items.forEach((item) => observer.observe(item));
    }

    const canUsePointerGlow =
      !prefersReducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canUsePointerGlow) {
      return () => observer?.disconnect();
    }

    const surfaceSelector = [
      ".stat-card",
      ".mini-card",
      ".project-card",
      ".skill-card",
      ".process-card",
      ".contact-panel",
      ".hero-profile",
      ".profile-playground",
      ".project-visual",
    ].join(", ");
    let activeSurface: HTMLElement | null = null;
    let nextSurface: HTMLElement | null = null;
    let nextX = 0;
    let nextY = 0;
    let animationFrame = 0;

    const clearActiveSurface = () => {
      if (activeSurface) {
        activeSurface.classList.remove("is-pointer-active");
        activeSurface = null;
      }
    };

    const updateSurface = () => {
      animationFrame = 0;

      if (!nextSurface) {
        clearActiveSurface();
        return;
      }

      if (activeSurface && activeSurface !== nextSurface) {
        activeSurface.classList.remove("is-pointer-active");
      }

      const rect = nextSurface.getBoundingClientRect();
      nextSurface.style.setProperty("--cursor-x", `${nextX - rect.left}px`);
      nextSurface.style.setProperty("--cursor-y", `${nextY - rect.top}px`);
      nextSurface.classList.add("is-pointer-active");
      activeSurface = nextSurface;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      nextSurface = event.target.closest<HTMLElement>(surfaceSelector);
      nextX = event.clientX;
      nextY = event.clientY;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateSurface);
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", clearActiveSurface, { passive: true });

    return () => {
      observer?.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", clearActiveSurface);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      clearActiveSurface();
    };
  }, []);

  return null;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = storedTheme === "light" ? "light" : "dark";
    let animationFrame = 0;

    document.documentElement.dataset.theme = nextTheme;

    if (nextTheme !== theme) {
      animationFrame = window.requestAnimationFrame(() => setTheme(nextTheme));
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
    // This hydration sync only needs the initial client-side stored preference.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("portfolio-theme", nextTheme);

      return nextTheme;
    });
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-pressed={theme === "light"}
    >
      <span className="theme-toggle-icon" aria-hidden="true" />
      <span className="theme-toggle-label">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
