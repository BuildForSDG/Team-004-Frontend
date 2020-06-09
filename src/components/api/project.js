import axios from 'axios';
import projectData from '../dummyData/smeProject';

export default {
  projects: {
    all: () => axios.get(projectData).then((res) => res.config.url)
  }
};
