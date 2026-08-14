// @ts-check

/**
 * Renders the entire portfolio from the single data source.
 *
 * This module contains ONLY rendering logic — no content. All text, links and
 * lists come from `data/portfolio-data.js`. It runs before `main.js` (see the
 * script order in index.html) so the template behaviours (typing effect,
 * scroll-spy nav, AOS) initialise against the freshly rendered DOM.
 */

import { portfolioData as data } from "../../data/portfolio-data.js";

/* ------------------------------------------------------------------ helpers */

/** @param {string} id */
const mount = (id) => document.getElementById(id);

/** Escape text so data values can't inject markup. @param {unknown} str */
const esc = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Set innerHTML on a mount point if it exists.
 * @param {string} id
 * @param {string} html
 */
const render = (id, html) => {
  const el = mount(id);
  if (el) el.innerHTML = html;
};

/** Map a social platform key to its icon class. @param {string} key */
const socialIcon = (key) =>
  ({
    github: "bx bxl-github",
    linkedin: "bx bxl-linkedin",
    facebook: "bx bxl-facebook",
    twitter: "bx bxl-twitter",
    instagram: "bx bxl-instagram",
    website: "bx bx-globe",
  })[key] || "bx bx-link";

/* ------------------------------------------------------------------ profile */

function renderProfile() {
  const { profile } = data;
  const social = Object.entries(profile.social)
    .filter(([, url]) => Boolean(url))
    .map(
      ([key, url]) =>
        `<a target="_blank" rel="noopener" href="${esc(url)}" class="${key}" aria-label="${esc(
          key
        )}"><i class="${socialIcon(key)}"></i></a>`
    )
    .join("");

  render(
    "profile",
    `
      <img src="${esc(profile.profileImage)}" alt="${esc(profile.name)}" class="img-fluid rounded-circle">
      <h1 class="text-light"><a href="index.html">${esc(profile.name)}</a></h1>
      <span class="role-tag">${esc(profile.title)}</span>
      <div class="social-links mt-3 text-center">${social}</div>
    `
  );
}

/* --------------------------------------------------------------- navigation */

function renderNavigation() {
  const items = data.navigation
    .map(
      (item, i) =>
        `<li><a href="${esc(item.href)}" class="nav-link scrollto${
          i === 0 ? " active" : ""
        }"><i class="${esc(item.icon)}"></i> <span>${esc(item.label)}</span></a></li>`
    )
    .join("");
  render("nav-list", items);
}

/* --------------------------------------------------------------------- hero */

function renderHero() {
  const { profile, resume } = data;
  const badges = data.professionalInterests
    .map(
      (tag) =>
        `<span class="badge-professional badge"><small>${esc(tag)}</small></span>`
    )
    .join("");

  render(
    "hero-content",
    `
      <span class="hero-greeting">${esc(profile.tagline)}</span>
      <h1><span class="grad">${esc(profile.name)}</span></h1>
      <p>I'm a <span class="typed" data-typed-items="${esc(profile.typedRoles.join(", "))}"></span></p>
      <h5>Professional Interests</h5>
      <div>${badges}</div>
      <div class="hero-actions mt-4">
        <a href="${esc(resume.file)}" target="_blank" rel="noopener" class="btn-resume"><i class="fa-solid fa-eye"></i> View Resume</a>
        <a href="${esc(resume.file)}" download="${esc(resume.downloadName)}" class="btn-resume btn-resume-outline"><i class="fa-solid fa-download"></i> Download CV</a>
      </div>
    `
  );
}

/* -------------------------------------------------------------------- about */

function renderAbout() {
  const { about, resume } = data;
  const paragraphs = about.description
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");

  const facts = about.facts
    .map((f) => {
      const value = f.link
        ? `<a target="_blank" rel="noopener" href="${esc(f.link)}">${esc(f.value)}</a>`
        : esc(f.value);
      return `<li><i class="bi bi-chevron-right"></i> <strong>${esc(
        f.label
      )}:</strong> <span>${value}</span></li>`;
    })
    .join("");

  const resumeFact = `
    <li><i class="bi bi-chevron-right"></i> <strong><i class="fa-solid fa-file-pdf"></i> CV / Resume:</strong>
      <span>
        <a target="_blank" rel="noopener" href="${esc(resume.file)}" title="View Resume"><i class="fa-solid fa-eye"></i> View</a>
        &nbsp;|&nbsp;
        <a href="${esc(resume.file)}" download="${esc(resume.downloadName)}" title="Download Resume"><i class="fa-solid fa-download"></i> Download</a>
      </span>
    </li>`;

  render(
    "about-content",
    `
      <div class="row">
        <div class="col-lg-10">
          <div class="resume-item-n">${paragraphs}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 content">
          <ul>${facts}${resumeFact}</ul>
        </div>
      </div>
    `
  );
}

/* ---------------------------------------------------------------- education */

function renderEducation() {
  const items = data.education
    .map(
      (e) => `
        <div class="resume-item">
          <h4>${esc(e.degree)}</h4>
          <h5>${esc(e.startDate)} - ${esc(e.endDate)}</h5>
          <p><em>${esc(e.institution)}${e.location ? ", " + esc(e.location) : ""}</em></p>
        </div>`
    )
    .join("");
  render("education-list", items);
}

/* --------------------------------------------------------------- experience */

function renderExperience() {
  const items = data.experience
    .map((x) => {
      const meta = [x.company, x.location, x.mode].filter(Boolean);
      const responsibilities = x.responsibilities?.length
        ? `<ul>${x.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`
        : "";
      const tech = x.techUsed?.length
        ? `<p><b>Tech:</b> <em>${x.techUsed.map(esc).join(", ")}</em></p>`
        : "";
      return `
        <div class="resume-item">
          <h4>${esc(x.role)}</h4>
          <h5>${esc(x.startDate)} - <b>${esc(x.endDate)}</b></h5>
          <p><em>${meta.map(esc).join(" &middot; ")}</em></p>
          ${x.description ? `<p>${esc(x.description)}</p>` : ""}
          ${responsibilities}
          ${tech}
        </div>`;
    })
    .join("");
  render("experience-list", items);
}

/* -------------------------------------------------------------- skill groups */

/**
 * @param {import('../../data/types').SkillGroup[]} groups
 */
const renderSkillGroups = (groups) =>
  groups
    .map(
      (g) =>
        `<div class="resume-item-n">${g.items
          .map((s) => `<h5>${esc(s.name)}</h5>`)
          .join("")}</div>`
    )
    .join("");

function renderSkills() {
  render("skills-list", renderSkillGroups(data.skills));
}

function renderOtherSkills() {
  render("other-skills-list", renderSkillGroups(data.otherSkills));
}

/* -------------------------------------------------------------------- tools */

function renderTools() {
  const rows = data.tools
    .map(
      (t) =>
        `<tr><th scope="row">${esc(t.label)}</th><td>${esc(t.value)}</td></tr>`
    )
    .join("");
  render("tools-list", rows);
}

/* ----------------------------------------------------------------- projects */

function renderProjects() {
  /** @param {string|null} link @param {string} icon @param {string} label */
  const linkBtn = (link, icon, label) =>
    link
      ? `<a href="${esc(link)}" target="_blank" rel="noopener" class="project-link"><i class="${icon}"></i> ${esc(
          label
        )}</a>`
      : "";

  const cards = data.projects
    .map((p) => {
      const tech = p.techStack
        .map((t) => `<span class="tech-chip">${esc(t)}</span>`)
        .join("");
      const links = [
        linkBtn(p.appStoreLink, "fa-brands fa-app-store-ios", "App Store"),
        linkBtn(p.playStoreLink, "fa-brands fa-google-play", "Play Store"),
        linkBtn(p.webLink, "fa-solid fa-globe", "Website"),
        linkBtn(p.githubLink, "fa-brands fa-github", "Code"),
      ]
        .filter(Boolean)
        .join("");
      const cover = p.images && p.images.length
        ? `<div class="project-media"><img src="${esc(p.images[0])}" alt="${esc(
            p.title
          )}" loading="lazy"></div>`
        : "";
      const shortDesc = p.shortDescription
        ? `<p class="project-short">${esc(p.shortDescription)}</p>`
        : "";
      // Full description is clamped to 2 lines; "Read more" expands it. Only
      // show the toggle when the text is long enough to actually be clamped.
      const description = p.description
        ? `
          <div class="project-desc-wrap">
            <p class="project-desc is-clamped">${esc(p.description)}</p>
            ${
              p.description.length > 120
                ? `<button type="button" class="read-more-btn" aria-expanded="false">Read more</button>`
                : ""
            }
          </div>`
        : "";
      return `
        <div class="resume-item-n project-card">
          ${cover}
          <div class="project-body">
            <h4>${esc(p.title)}${p.featured ? ' <span class="featured-badge">Featured</span>' : ""}</h4>
            ${shortDesc}
            ${description}
            <div class="project-tags">
              <span class="project-tags-label">Tech Stack</span>
              <div class="tech-stack">${tech}</div>
            </div>
            ${links ? `<div class="project-links">${links}</div>` : ""}
          </div>
        </div>`;
    })
    .join("");

  render("projects-list", cards);
  wireReadMore();
}

/** Attach expand/collapse behaviour to project "Read more" buttons. */
function wireReadMore() {
  const list = mount("projects-list");
  if (!list) return;
  list.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const desc = btn.previousElementSibling;
      if (!desc) return;
      const clamped = desc.classList.toggle("is-clamped");
      btn.textContent = clamped ? "Read more" : "Read less";
      btn.setAttribute("aria-expanded", String(!clamped));
    });
  });
}

/* ------------------------------------------------------------ spoken langs */

function renderLanguages() {
  const items = data.spokenLanguages
    .map(
      (l) => `
        <div class="resume-item-n">
          <h4>${esc(l.name)}</h4>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${l.level}%"
              aria-valuenow="${l.level}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>`
    )
    .join("");
  render("languages-list", items);
}

/* ---------------------------------------------------------------- interests */

function renderInterests() {
  const items = `<div class="resume-item-n">${data.interests
    .map((i) => `<h5>${esc(i)}</h5>`)
    .join("")}</div>`;
  render("interests-list", items);
}

/* ------------------------------------------------------------------ contact */

function renderContact() {
  const contact = data.contact || {};
  const emails = Array.isArray(contact.emails) ? contact.emails : [];
  const phones = Array.isArray(contact.phones) ? contact.phones : [];
  const location = data.profile && data.profile.location;

  /** @param {string} icon @param {string} label @param {string} value @param {string | null} href */
  const card = (icon, label, value, href) => {
    const inner = `
      <span class="contact-icon"><i class="${icon}"></i></span>
      <div class="contact-meta">
        <span class="contact-label">${esc(label)}</span>
        <span class="contact-value">${esc(value)}</span>
      </div>`;
    return href
      ? `<a class="contact-card resume-item-n" href="${esc(href)}">${inner}</a>`
      : `<div class="contact-card resume-item-n">${inner}</div>`;
  };

  const emailCards = emails.map((e) =>
    card("bi bi-envelope-fill", "Email", e, `mailto:${e}`)
  );
  const phoneCards = phones.map((p) => {
    const tel = String(p).replace(/[^\d+]/g, "");
    return card("bi bi-telephone-fill", "Phone", p, `tel:${tel}`);
  });
  const locationCard = location
    ? [card("bi bi-geo-alt-fill", "Location", location, null)]
    : [];

  const cards = [...emailCards, ...phoneCards, ...locationCard].join("");
  if (!cards) return;
  render("contact-content", `<div class="contact-grid">${cards}</div>`);
}

/* ------------------------------------------------------------------- footer */

function renderFooter() {
  render(
    "footer-content",
    `&copy; ${new Date().getFullYear()} <strong>${esc(
      data.profile.name
    )}</strong> &mdash; ${esc(data.profile.title)}`
  );
}

/* --------------------------------------------------------------------- boot */

[
  renderProfile,
  renderNavigation,
  renderHero,
  renderAbout,
  renderEducation,
  renderExperience,
  renderSkills,
  renderOtherSkills,
  renderTools,
  renderProjects,
  renderLanguages,
  renderInterests,
  renderContact,
  renderFooter,
].forEach((fn) => {
  try {
    fn();
  } catch (err) {
    console.error(`[portfolio] ${fn.name} failed`, err);
  }
});
