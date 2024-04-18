import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="container flex flex-col items-center mt-5">
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-start">
          <h2 className='text-md font-bold'>Promoted</h2>
 
        </div>
        <div
          className="flex md:flex-row flex-col items-center justify-center gap-3 w-full"
          id="hero"
        >
          <PromotedPost />
          <PromotedPost />
        </div>
      </section>
    </main>
  );
};

const PromotedPost = () => {
  return (
    <div className="bg-card flex flex-col justify-center gap-6 px-8 py-3 border-2  h-fit  w-full rounded-lg">
      <div className="flex flex-col h-22">
        <h2 className="text-lg font-semibold">HYCM CAPITAL MARKETS</h2>
        <small className="text-muted-foreground">
          Where Investors And Traders Make Better Decisions Contact me to
          subscribe.
        </small>
      </div>
      <div className="flex items-center md:justify-normal justify-between md:gap-10 gap-3">
        <Button>Subscribe</Button>
        <Button variant="destructive">Vote</Button>
      </div>
    </div>
  );
};

export default Home;
