import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoAe from '../assets/logo-ae.png';
import logoTrafilea from '../assets/logo-trafilea.png';
import logoAzumo from '../assets/logo-azumo.webp';
import PageTitle from '../components/Text/PageTitle';
import PageSubtitle from '../components/Text/PageSubtitle';
import SectionTitle from '../components/Text/SectionTitle';
import Card from '../components/Card';
import LogosCards from '../components/LogosCards';
import SectionSubTitle from '../components/Text/SectionSubtitle';

function HomePage() {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional if you want to skip the scrolling animation
    });
  });
  return (
    <>
      <section className="hero section section__wide">
        <PageTitle>
          Experts at&nbsp;{' '}
          <HashLink to="#product-managment">product magment</HashLink> and&nbsp;
          <HashLink to="/services/#agile-methodologies">
            agile methodologies
          </HashLink>
          .
        </PageTitle>
        <PageSubtitle>
          At our company, we are driven by a problem-solving mindset. We believe
          that the best way to achieve exceptional results for our clients is by
          addressing their unique challenges and finding effective solutions.
        </PageSubtitle>
      </section>

      <section className="section section__wide" id="agile">
        <SectionTitle>
          <Link to="/services">Work with us</Link>
        </SectionTitle>
        <div className="card__grid">
          <Card className="card__big">
            <h3>Agile methodologies</h3>
            <p>
              Cycle team and Lead time improved by 80% on the team. No scope
              creep on Sprints, no gold plating on Stories. Definition of Done
              agreements with the dev team.
            </p>
            <HashLink className="btn" to="/services/#agile-methodologies">
              See more
            </HashLink>
          </Card>
          <Card className="card__big">
            <h3>Product mangment</h3>
            <p>
              Product Owner (and our CFD shows hitting 95% of our commitments
              every Product Iteration) Leading RTE / Scrum of Scrums
              comunication Leading and creating more than 10+ Inspect & Adapt
              sessions
            </p>
            <HashLink className="btn" to="/services/#product-managment">
              See more
            </HashLink>
          </Card>
        </div>
      </section>
      <section className="section section__wide">
        <SectionTitle>
          <Link to="/aboutus">Our team & clients</Link>
        </SectionTitle>
        <SectionSubTitle>
          With a team of people with more than 13 years of experience in the
          industry, we have a proven track record of helping our clients build
          and manage successful products. Our team of experts has worked with a
          diverse range of organizations worldwide across various industries
          like:
        </SectionSubTitle>
        <div className="logos-container">
          <LogosCards to="/aboutus/#ae">
            {' '}
            <img src={logoAe} alt="logo" />
          </LogosCards>
          <LogosCards to="/aboutus/#tl">
            <img src={logoTrafilea} alt="logo" />
          </LogosCards>
          <LogosCards to="/aboutus/#az">
            <img src={logoAzumo} alt="logo" />
          </LogosCards>
        </div>
      </section>

      <section className="section section__wide">
        <Card className="card__big">
          <Link to="/contact">
            <SectionTitle>Let&apos;s talk</SectionTitle>
          </Link>

          <SectionSubTitle>
            If you&apos;re interested in learning more about how we can help you
            improve your product development process, please contact us today.
            We look forward to discussing your needs and developing a customized
            solution that meets your unique requirements.
          </SectionSubTitle>
          <div className="btn-box">
            <HashLink className="btn" to="/contact">
              Go to contact page
            </HashLink>
          </div>
        </Card>
      </section>
    </>
  );
}

export default HomePage;
