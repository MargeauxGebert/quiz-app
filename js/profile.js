console.clear();

function getELement(datajs) {
  return document.querySelector(`[data-js="${datajs}"]`);
}

const buttonDarkLightMode = getELement("button-darkmode");
const profile = getELement("profile");

const svgLightMode = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon__lightmode"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

const svgDarkMode = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button__darkmode-icon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

buttonDarkLightMode.addEventListener("click", () => {
  buttonDarkLightMode.classList.toggle("light");
  const profileHeader = getELement("profile-header");
  const profileDiv = getELement("profile-div");
  const profileName = getELement("profile-name");
  const profileFooter = getELement("profile-footer");

  if (buttonDarkLightMode.classList.contains("light") === true) {
    buttonDarkLightMode.innerHTML = svgLightMode;
    profileHeader.classList.add("dark");
    profileDiv.classList.add("dark");
    profileName.classList.add("dark");
    profileFooter.classList.add("dark");
  } else {
    buttonDarkLightMode.innerHTML = svgDarkMode;
    profileHeader.classList.remove("dark");
    profileDiv.classList.remove("dark");
    profileName.classList.remove("dark");
    profileFooter.classList.remove("dark");
  }
});
