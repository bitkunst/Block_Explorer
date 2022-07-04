import BlockPrev from './blocks/BlockPrev';
import TxPrev from './transactions/TxPrev';

const Home = () => {
    return (
        <div>
            <BlockPrev />
            <TxPrev />
        </div>
    );
};

export default Home;
