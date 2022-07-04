import axios from 'axios';

const getBlockData = async () => {
    const url = 'http://localhost:4000/api/blocks/info';

    const response = await axios.get(url);

    return response.data;
};

export default getBlockData;
