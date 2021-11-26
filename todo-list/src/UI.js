const UI = (() => {
  // Fake jQuery
  const $ = (selector) => document.querySelector(selector);

  const project = {
    add: $(".add-project"),
    form: {
      action: {
        submit: $("#project-container .add-button"),
        cancel: $("#project-container .cancel-button"),
      },
      value: {
        title: $("#project-container .input-title"),
      },
    },
  };

  const todo = {
    add: $(".add-todo"),
    form: {
      action: {
        submit: $("#todo-container .add-button"),
        cancel: $("#todo-container .cancel-button"),
      },
      value: {
        title: $("#todo-container .input-title"),
      },
    },
  };

  return {
    project,
    todo,
  };
})();

export default UI;
