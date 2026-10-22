const profile = document.querySelector('.profile');
const profileName = profile.querySelector('h1');
const contactLinks = [...profile.querySelectorAll('.profile-links > li')];

function headerWraps() {
  const lineHeight = parseFloat(getComputedStyle(profileName).lineHeight);
  const nameWraps = profileName.getBoundingClientRect().height > lineHeight * 1.5;
  const contactRows = new Set(contactLinks.map((item) => Math.round(item.getBoundingClientRect().top)));
  return nameWraps || contactRows.size > 1;
}

const sky = profile.querySelector('.header-sky');
const companion = profile.querySelector('.profile-companion');
const minSkyWidth = 160;

function fitSky() {
  let room = false;
  if (getComputedStyle(companion).display !== 'none') {
    const rect = (element) => element.getBoundingClientRect();
    const contentRight = Math.max(
      rect(profileName).right,
      rect(profile.querySelector('.profile-role')).right,
      rect(contactLinks[contactLinks.length - 1]).right,
    );
    const start = contentRight + 28;
    const end = rect(companion).left - 20;
    if (end - start >= minSkyWidth) {
      sky.style.left = `${start - rect(profile).left}px`;
      sky.style.width = `${end - start}px`;
      room = true;
    }
  }
  sky.hidden = !room;
}

function fitPikachu() {
  profile.classList.remove('mascot-hidden');
  if (headerWraps()) {
    profile.classList.add('mascot-hidden');
  }
  fitSky();
}

fitPikachu();
document.fonts.ready.then(fitPikachu);

let observedWidth = 0;
new ResizeObserver(([entry]) => {
  const width = Math.round(entry.contentRect.width);
  if (width !== observedWidth) {
    observedWidth = width;
    fitPikachu();
  }
}).observe(document.querySelector('.profile-header'));

for (const button of document.querySelectorAll('[data-copy-email]')) {
  let resetTimer;

  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const icon = button.querySelector('i');
    const statusMessage = document.querySelector('#email-copy-status');

    try {
      await navigator.clipboard.writeText(email);
      clearTimeout(resetTimer);
      icon.className = 'fa-solid fa-check';
      button.classList.add('is-copied');
      button.title = 'Copied';
      statusMessage.textContent = `Copied ${email}`;
      resetTimer = setTimeout(() => {
        icon.className = 'fa-regular fa-copy';
        button.classList.remove('is-copied');
        button.title = button.getAttribute('aria-label');
      }, 2000);
    } catch {
      const emailRow = button.closest('.email-row');
      emailRow.querySelector('.email-copy-fallback')?.remove();
      const emailInput = document.createElement('input');
      emailInput.className = 'email-copy-fallback';
      emailInput.value = email;
      emailInput.readOnly = true;
      emailInput.setAttribute('aria-label', 'Email address to copy');
      emailInput.addEventListener('blur', () => emailInput.remove(), { once: true });
      emailRow.append(emailInput);
      emailInput.focus();
      emailInput.select();
      statusMessage.textContent = `Clipboard unavailable. ${email} is selected for copying.`;
    }
  });
}


const navigation = document.querySelector('.navigation');
const navItems = [...navigation.querySelectorAll('a[href^="#"]')]
  .map((link) => ({ link, section: document.getElementById(link.getAttribute('href').slice(1)) }))
  .filter((item) => item.section);
let activeNavLink = null;
let navFrame = 0;

function updateActiveNav() {
  navFrame = 0;
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const line = offset + 24;
  let current = null;
  for (const item of navItems) {
    if (item.section.getBoundingClientRect().top <= line) current = item.link;
  }
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) current = navItems[navItems.length - 1].link;
  if (current === activeNavLink) return;
  activeNavLink = current;
  for (const { link } of navItems) {
    const isActive = link === current;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
  if (current && navigation.scrollWidth > navigation.clientWidth) {
    navigation.scrollTo({ left: current.offsetLeft - (navigation.clientWidth - current.offsetWidth) / 2, behavior: 'smooth' });
  }
}

function requestNavUpdate() {
  if (!navFrame) navFrame = requestAnimationFrame(updateActiveNav);
}

window.addEventListener('scroll', requestNavUpdate, { passive: true });
window.addEventListener('resize', requestNavUpdate);
updateActiveNav();
