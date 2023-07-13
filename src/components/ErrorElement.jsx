import React from 'react';
import { Link } from 'react-router-dom';
import PageSubtitle from './Text/PageSubtitle';
import PageTitle from './Text/PageTitle';

function ErrorElement() {
  return (
    <section className="hero section section__wide">
      <PageTitle>Oops! Something went wrong...</PageTitle>
      <PageSubtitle>
        Go to <Link to="/">home page</Link> and try again.
      </PageSubtitle>
    </section>
  );
}

export default ErrorElement;
