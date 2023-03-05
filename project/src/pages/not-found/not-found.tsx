import {Link} from 'react-router-dom';
import {Fragment} from 'react';

export default function NotFound(): JSX.Element{
  return (
    <Fragment>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </Fragment>
  );
}
