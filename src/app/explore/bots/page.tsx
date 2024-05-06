import { Card } from '@/components/utils/card';
import cardsData from '@/lib/data.json';

const Bots = async () => {
  return (
    <section className='container flex flex-col items-center justify-center'>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {cardsData.map((card) => {
          // ! ----------- The key Should be Card id --------------- ! \\
          return <Card key={card.name} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Bots;
