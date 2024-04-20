import { redirect } from 'next/navigation';

const Home = async () => {
  redirect('/explore/bots');
  return <div></div>;
};

export default Home;
