export const getErr = (err) => {
  const form = document.querySelector(`form`);
  form.innerHTML += `<div class="errComments" style="width: 300px; height: 100px; color: red; font-size: 25px; position: absolute; top: 80%; left: 50%; background-color: white">${err}</div>`;


  const handleClickErr = (evt) => {
    evt.preventDefault();
    document.querySelector(`.errComments`).remove();
    window.removeEventListener(`click`, handleClickErr);
  };

  window.addEventListener(`click`, handleClickErr);
};
