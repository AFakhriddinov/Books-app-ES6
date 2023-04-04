/* eslint-disable*/
export const displayPage = (show, hide) => {
  const showElement = document.querySelector(show);
  showElement.classList.remove("hide");
  for (let i = 0; i < Object.keys(hide).length; i++) {
    const hideElement = document.querySelector(hide[i]);
    if (hideElement.classList.contains("hide") === false) {
      hideElement.classList.add("hide");
    }
  }
};
