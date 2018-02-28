import React from "react";
import graphql from "graphql";
import Content, { HTMLContent } from "../components/Content";
import HomeServices from "../components/home/services";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  services
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
            <HomeServices services={services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      services={post.frontmatter.services}
    />
  );
};

export const homePageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { slug: { eq: "/" } }) {
      html
      frontmatter {
        slug
        title
        services {
          title
          description
          link
        }
      }
    }
  }
`;
