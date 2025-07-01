import axios from 'axios';

const APIClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CMS_API_HOST}/api`,
  headers: {
    Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
  },
});

export default APIClient;
