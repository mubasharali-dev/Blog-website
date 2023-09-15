/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { iSEO } from "../src/shared/interfaces";
import { WEBSITE_URL } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const TermsAndConditions = () => {
    const PAGE_SEO: iSEO = {
        title: 'Terms and conditions',
        description: `These terms and conditions outline the rules and regulations for the use of Website, located at ${WEBSITE_URL}.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }    
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
        <div>Terms</div>
        </PageLayout>
    )
}

export default TermsAndConditions