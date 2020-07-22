import axios from 'axios';

export function fetchProducts(categoryIri) {
    const params = {};

    if (categoryIri) {
        params.category = categoryIri;
    }

    return axios.get('/api/products', { params });
}
