import axios from 'axios';

export const getFeatures = () => axios.get('/api/features');
export const getFeaturesBBox = (xmin,ymin,xmax,ymax) =>
    axios.get('/api/features/bbox', { params: { xmin, ymin, xmax, ymax }});
