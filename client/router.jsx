FlowRouter.route("/", {
  action: () => {
    ReactLayout.render(AppLayout, {
      content: <HomePage />
    })
  }
});


