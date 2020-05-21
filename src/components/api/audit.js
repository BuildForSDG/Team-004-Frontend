import axios from 'axios';
import auditData from '../dummyData/audit';

export default {
  audit: {
    all: () => axios.get(auditData).then((res) => res.config.url)
  }
};
