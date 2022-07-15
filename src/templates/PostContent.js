import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

const H2 = styled.h2`
  margin: 40px 0 16px 0;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const H3 = styled.h3`
  margin: 30px 0 16px 0;
  font-size: 21px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const P = styled.p`
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const PostContent = ({ postContent }) => {
  return (
    <MDXProvider
      components={{
        h2: (props) => <H2 {...props}></H2>,
        h3: (props) => <H3 {...props}></H3>,
        p: (props) => <P {...props}></P>,
        img: (props) => <Img {...props}></Img>,
      }}
    >
      <MDXRenderer>{postContent}</MDXRenderer>
    </MDXProvider>
  );
};

export default PostContent;
