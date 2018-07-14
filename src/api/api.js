import axios from 'axios';

const api = axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
});

export const getCat64 = async url => {
  const data = (await axios.get('https://cataas.com/cat?type=sd', {
    responseType: 'arraybuffer',
  })).data;
  return Buffer.from(data, 'binary').toString('base64');
};
