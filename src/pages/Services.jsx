import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSubtitle from '../components/Text/PageSubtitle';
import PageTitle from '../components/Text/PageTitle';
import SectionSubTitle from '../components/Text/SectionSubtitle';
import SectionTitle from '../components/Text/SectionTitle';
import InfoBlocks from '../components/InfoBlocks';
import Card from '../components/Card';

function Services() {
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
        <PageTitle>We build and&nbsp;manage successful products.</PageTitle>
        <PageSubtitle>
          We are a company that delivers cutting-edge solutions to global
          organizations and technology startups, with a focus on collaborating
          with companies based in the United States. Our customers choose us as
          their partner year after year.
        </PageSubtitle>
      </section>
      <section className="section section__wide work services">
        <SectionTitle id="product-managment">As product managers</SectionTitle>
        <SectionSubTitle>
          As a company, we specialize in project and portfolio management using
          Asana, with a focus on remote work. Our team has expertise in managing
          diverse marketing teams, including Acquisition, Growth, IT,
          Creatives/Design/Copywrite, Social Media, Retention, SEO, and
          Merchandising & Operations teams.
        </SectionSubTitle>

        <SectionTitle variant>Our toolbox & certifications</SectionTitle>
        <InfoBlocks title={<h3>Shopify</h3>}>
          <p>
            We successfully managed and implemented several integrations on
            Shopify, including LOB, AttentiveSMS, Nosto, Tapcart, and Cohley.
          </p>
        </InfoBlocks>
        <InfoBlocks title={<h3>Asana </h3>}>
          <p>
            Our company used Asana to build portfolios and manage projects for a
            Top 25 Forbes Company. We created a Project/Product Roadmap with a
            focus on remote work and successfully managed the implementation of
            several integrations on Shopify.
          </p>
        </InfoBlocks>
        <InfoBlocks
          title={
            <>
              <h3>Certified by Scaled Agile and Scrum Alliance</h3>
              <p>SAFe 5 / PO / PM</p>
            </>
          }
        >
          <p>
            Our team includes individuals who are certified as SAFe 5 Product
            Owners/Product Managers.This certification validates their ability
            to effectively manage and prioritize product backlogs, work with
            stakeholders to define product vision and strategy, and drive the
            development and delivery of high-quality products within a SAFe
            organization.
          </p>
        </InfoBlocks>

        <SectionTitle id="agile-methodologies"> As scrum masters</SectionTitle>

        <SectionSubTitle>
          Our team is responsible for ensuring the successful delivery of
          products to market on time. We have achieved an impressive 80%
          improvement in cycle time and lead time, thanks to our dedicated
          efforts. We eliminated scope creep on sprints and gold plating on
          stories through the establishment of clear Definition of Done
          agreements with our development team.
        </SectionSubTitle>

        <SectionTitle variant>Our toolbox & certifications</SectionTitle>
        <InfoBlocks
          title={
            <>
              <h3>Certified by Scaled Agile and Scrum Alliance</h3>
              <p>SAFe 5 / ASM / SM</p>
            </>
          }
        >
          <p>
            ensures that our teams are following the Scrum framework and Agile
            methodologies, leading to increased productivity and efficient
            delivery of high-quality products. Our Scrum Masters have in-depth
            knowledge and skills in Scrum, which they can use to train and
            mentor other team members. Additionally, having certified Scrum
            Masters demonstrates our commitment to delivering value to our
            customers by continuously improving our processes and practices
            through the Scrum framework.
          </p>
        </InfoBlocks>
        <InfoBlocks
          title={
            <>
              <h3>CSM</h3>
              <p>Certified ScrumAlliance</p>
            </>
          }
        >
          <p>
            Part of a SAFe Scrum Master of a train with 200 Developers,
            Architects, Product Owners, Product Managers, Portfolio Manager and
            Scrum Master, my role is to make sure my product and product team
            (Online Appointment Booking).
          </p>
        </InfoBlocks>
        <InfoBlocks title={<h3>Jira</h3>}>
          <p>
            As a company, we utilize Jira as a project management tool to plan
            and track the progress of our software development projects. We use
            it to create user stories, track bugs, assign tasks, manage sprints,
            and collaborate with team members. By leveraging Jira, we are able
            to streamline our project management processes and ensure that our
            projects are delivered on time and within budget.
          </p>
        </InfoBlocks>
      </section>
      <section className="section section__wide card__grid">
        <Link to="/aboutus" className="no_hover">
          <Card className="card__big">
            <h3>We have a proven track record.</h3>
            <p className="section__sub">← Learn more about us</p>
          </Card>
        </Link>
        <Link to="/contact" className="no_hover">
          <Card className="card__big">
            <h3>Let&apos;s talk.</h3>

            <p className="section__sub">Contact us →</p>
          </Card>
        </Link>
      </section>
    </>
  );
}

export default Services;
