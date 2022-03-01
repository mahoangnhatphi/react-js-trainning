class HelloComponent extends React.Component {
    render() {
        return React.createElement('h1', undefined, 'Hello Fresher');
    }
}

var app = React.createElement(App);

ReactDOM.render(
    app,
    document.getElementById('react')
);