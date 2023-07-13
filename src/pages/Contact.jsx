import React, { useEffect, useState } from 'react';
import PageSubtitle from '../components/Text/PageSubtitle';
import PageTitle from '../components/Text/PageTitle';
import SectionSubTitle from '../components/Text/SectionSubtitle';
import Card from '../components/Card';

function Contact() {
  const [formClass, setFormClass] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional if you want to skip the scrolling animation
    });
  });
  const handleSubbmit = () => {
    setFormClass('form__hidden');
    setIsSubmitted(true);
  };
  return (
    <>
      <section className="hero section section__wide">
        <PageTitle>Let&apos;s talk</PageTitle>
        <PageSubtitle>
          If you&apos;re interested in discussing potential opportunities,
          please feel free to connect us.
        </PageSubtitle>
      </section>

      <div className="section section__wide">
        <form
          className={formClass}
          name="gform"
          id="gform"
          encType="text/plain"
          action=" https://docs.google.com/forms/d/e/1FAIpQLSd7Q5rl7UsoAMCR85xVDdi6TKdHkdK5GPlaNezRJODoG2xSBQ/formResponse?"
          target="hidden_iframe"
          onSubmit={handleSubbmit}
        >
          <label htmlFor="entry.1517581387" className="section__sub">
            <p>Email address</p>
            <input
              type="email"
              aria-label="Email address"
              name="entry.1517581387"
              id="entry.1517581387"
              readOnly={isSubmitted === true}
            />
          </label>

          <label htmlFor="entry.468176201" className="section__sub">
            <p> Message:</p>

            <textarea
              aria-label="Message"
              name="entry.468176201"
              readOnly={isSubmitted === true}
            />
          </label>
          <input
            className={`btn ${isSubmitted && 'send'}`}
            type="submit"
            value={isSubmitted ? 'Message sent. Thanks!' : 'Send message'}
          />
        </form>
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{
            display: 'none',
            width: '0px',
            height: '0px',
            border: '0',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-1000',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div className="section section__wide card__grid">
        <Card className="card__big">
          {' '}
          <h3>Contact us</h3>
          <SectionSubTitle>
            <a
              href="tel:+14782871368"
              target="_blank"
              rel="noreferrer"
              className="no_hover"
            >
              <p className="section__sub">+54 9 3416 74 00 84</p>
            </a>
            <a
              href="www.linkedin.com/in/shajarllc"
              target="_blank"
              rel="noreferrer"
              className="no_hover"
            >
              <p className="section__sub"> linkedin.com/in/andreswulfson</p>
            </a>

            <a
              href="mailto:contact@shajarthecompany.com"
              target="_blank"
              rel="noreferrer"
              className="no_hover"
            >
              <p className="section__sub">andreswulfson@gmail.com</p>
            </a>
          </SectionSubTitle>
        </Card>
        <Card className="card__big">
          <h3>Office</h3>
          <p className="section__sub">
            Corrientes 1624, 1, <br />
            Rosario, <br />
            Santa Fe, 2000 <br />
            Argentina
          </p>
        </Card>
      </div>
    </>
  );
}

export default Contact;
