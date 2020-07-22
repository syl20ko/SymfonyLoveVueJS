import axios from 'axios';

export function fetchProducts(categoryIri, searchTerm) {
    const params = {};

    if (categoryIri) {
        params.category = categoryIri;
    }

    if (searchTerm) {
        params.name = searchTerm;
    }

    return axios.get('/api/products', { params });
}
