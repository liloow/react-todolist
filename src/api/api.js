import axios from 'axios';

export const getCat64 = async url => {
  const data = (await axios.get('https://cataas.com/cat?type=sd', {
    responseType: 'arraybuffer',
  })).data;
  return Buffer.from(data, 'binary').toString('base64');
};
