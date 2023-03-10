import { NotionPage } from "@/components/NotionPage";
import { domain } from "@/lib/config";
import { resolveNotionPage } from "@/lib/resolve-notion-page";
import * as React from "react";

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error("page error", domain, err);

    // we don't wanvt to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />;
}
