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
      self: $("#add-project-popup"),
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
      self: $("#add-todo-popup"),
    },
  };

  return {
    project,
    todo,
  };
})();

export default UI;
