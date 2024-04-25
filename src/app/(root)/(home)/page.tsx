import { redirect } from 'next/navigation';

const Home = async () => {
  redirect(`/explore/bots`);
};

export default Home;
