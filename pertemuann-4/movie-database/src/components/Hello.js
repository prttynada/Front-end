/**
 * Membuat Component Hello.
 * Component merender element-element Html
 */

 function Hello(props) {
    //destructing props
    const { name } = props;

    // did dalam return adalah JSX
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} Frontend Engineer</p>
        </div>
    );
}

export default Hello;