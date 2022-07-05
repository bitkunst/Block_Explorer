import axios from 'axios';

const searchData = async (selected, inputData) => {
    try {
        console.log(selected);
        if (selected === 'blockNum') {
            const url = 'http://localhost:4000/api/blocks/searchBlock';
            const response = await axios.post(url, { input: inputData });

            return response.data;
        } else if (selected === 'address') {
            const url = 'http://localhost:4000/api/tx/searchAddress';
            const response = await axios.post(url, { input: inputData });

            return response.data;
        } else if (selected === 'txHash') {
            const url = 'http://localhost:4000/api/tx/searchHash';
            const response = await axios.post(url, { input: inputData });

            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
};

export default searchData;
