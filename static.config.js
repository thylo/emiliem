import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";
import { capitalize } from "lodash";
import fs from "fs";
import klaw from "klaw";
import path from "path";
import matter from "gray-matter";
import Typography from "typography";
import Theme from "typography-theme-moraga";
import { TypographyStyle, GoogleFont } from "react-typography";

Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: "hsla(189,100%,24%,.8)"
  },
  "a:hover": {
    color: "hsla(189,100%,14%,.8)"
  },
  h2: { fontWeight: 400 }
});
Theme.headerColor = "hsl(259, 73%, 15%)";
Theme.scaleRatio = 1.6;

const typography = new Typography(Theme);

function getPosts() {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      if (fs.existsSync("./src/pages")) {
        klaw("./src/pages")
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Remove unused key //
              delete dataObj.orig;
              // Push object into items array //
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

const getPageData = async ({ content, data }, pages) => {
  return { content, data, pages };
};

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    const pages = await getPosts();
    const routes = pages.map(page => {
      return {
        path: page.data.slug,
        component: `src/containers/${capitalize(page.data.templateKey)}`,
        getData: () => getPageData(page, pages)
      };
    });
    routes.push({
      is404: true,
      component: "src/containers/404"
    });
    return routes;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <title>Emiliem</title>
            <meta property="og:title" content="Emilie M" />
            <meta
              property="og:description"
              content="Conseil en image - maquillage - massage"
            />
            <meta
              property="og:image"
              content="http://www.emiliem.be/images/250x250-P1010868b.jpg"
            />
            <meta name="description" content="Conseil en image - maquillage - massage">
            <meta name="keywords" content="conseil,image,maquillage,massage,emilie,moreels,emiliem">
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <script
              type="text/javascript"
              src="https://identity.netlify.com/v1/netlify-identity-widget.js"
            />
            {renderMeta.styleTags}

            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
