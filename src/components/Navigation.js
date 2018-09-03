import React from 'react';

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
};



class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-#2E2E2E">
        <a className="navbar-brand" href="/">Ryan</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Experience" />
            <NavItem path="/page3" name="Projects" />
            <NavItem path="/page4" name="Resume" />
            <NavItem path="/page5" name="About Me" />
            <NavItem path="/page6" name="Contact Me" />
          </ul>
          {/*<form className="form-inline my-2 my-lg-0">*/}
            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
          {/*</form>*/}
        </div>
      </nav>
    )
  }
}



export default Navigation;