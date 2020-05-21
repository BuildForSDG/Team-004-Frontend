import axios from 'axios';
import data from '../dummyData/data.json';

export default {
  audit: {
    all: () => axios.get(data).then((res) => res.config.url)
  }
};
