import HeroSection from '../components/home/HeroSection';
import FeaturedSection from '../components/home/FeaturedSection';
import StatsSection from '../components/home/StatsSection';
import NewsletterSection from '../components/common/NewsletterSection';
import blogsData from '../data/blogs.json';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection blogs={blogsData.blogs} />
      <StatsSection />
      <NewsletterSection />
    </>
  );
}