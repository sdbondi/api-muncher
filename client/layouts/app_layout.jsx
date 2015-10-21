AppLayout = React.createClass({
  render() {
    return <div>
      <Navigation />
      <section role="main">
        {this.props.content}
      </section>
    </div>;
  }
})
