/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
            Welcome to the world of gaming tutorials with the help of blogs
          </Text>

          <Text p className="mt-3 text-xl">
            You can find the guide to different kind of games here.
          </Text>

          <div className='flex justify-center mt-5 flex-wrap '>
            <a href="/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Games</span>
            </a>
            <LinkTo href="/" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Blogs</span>
            </LinkTo>
            <LinkTo href="/" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Topics</span>
            </LinkTo>

            <a href="/" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>About</span>
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home