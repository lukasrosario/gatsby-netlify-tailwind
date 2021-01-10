import React from 'react';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ logos, me, inspiration }) => {
  return (
    <div className="w-full min-h-screen items-center justify-center flex flex-col bg-gray-800 px-4 md:px-8 lg:px-24 xl:px-36">
      <div className="flex flex-row items-center justify-center flex-wrap">
        {logos.map((item, index) => (
          <a key={index} className="m-12" href={item.link}>
            <PreviewCompatibleImage
              className="w-24 h-24"
              imgStyle={{ objectFit: 'contain' }}
              alt={item.alt}
              image={item.image}
            />
          </a>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center mb-4">
        <p className="text-2xl font-sans whitespace-pre text-gray-200">
          Made by{' '}
        </p>
        <a
          href={me.link}
          className="text-2xl font-sans underline text-indigo-400 whitespace-nowrap"
        >
          {me.name}
        </a>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <p className="text-2xl font-sans whitespace-pre text-gray-200">
          Inspired by{' '}
        </p>
        <a
          href={inspiration.link}
          className="text-2xl font-sans underline text-indigo-400 whitespace-nowrap"
        >
          {inspiration.name}
        </a>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        logos={frontmatter.logos}
        me={frontmatter.me}
        inspiration={frontmatter.inspiration}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        logos {
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          link
        }
        me {
          name
          link
        }
        inspiration {
          name
          link
        }
      }
    }
  }
`;
