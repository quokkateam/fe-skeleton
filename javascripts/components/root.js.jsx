var Root = React.createClass({
  // Root for main pages
  render: function() {
    return (
      <div>
        <Home />
        <SignIn />
        <SignUp />
        <Challenge />
        <Admin />
        <Habit />
        <CheckIn />
      </div>
    );
  }
});