document.addEventListener("DOMContentLoaded", () => {
  const profiles = document.querySelectorAll(".profiles .profile");

  profiles.forEach((profile) => {
    if (profile.classList.contains("add-profile-li")) return;

    const profileLink = profile.querySelector("a");
    const profileImage = profile.querySelector("img");
    const profileName = profile.querySelector("figcaption");

    if (!profileLink || !profileImage || !profileName) return;

    profileLink.addEventListener("click", () => {
      localStorage.setItem("perfilAtivoNome", profileName.textContent.trim());
      localStorage.setItem("perfilAtivoImagem", profileImage.src);
    });
  });
});
