const UI = (() => {
  // Fake jQuery
  const $ = (selector) => document.querySelector(selector);

  const project = {
    add: $(".add-project"),
    form: {
      action: {
        add: $("#project-container .add-button"),
        cancel: $("#project-container .cancel-button"),
      },
      input: {
        title: $("#project-container .input-title"),
      },
    },
  };

  const todo = {
    add: $(".add-todo"),
    form: {
      action: {
        add: $("#todo-container .add-button"),
        cancel: $("#todo-container .cancel-button"),
      },
      input: {
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
