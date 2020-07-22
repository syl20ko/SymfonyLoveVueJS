<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <title-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
            <div class="col-9">
                <search-bar
                    @search-products="onSearchProducts"
                />
            </div>
            <div class="col-12">
                <product-list
                    :products="products"
                    :loading="loading"
                />
            </div>

            <div class="row">
                <legend-component :title="legend" />
            </div>
        </div>
    </div>
</template>
<script>
import { fetchProducts } from '@/services/products-service';
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import TitleComponent from '@/components/title';
import SearchBar from '@/components/search-bar';

export default {
    name: 'Catalogue',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
        SearchBar,

    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work !!',
        };
    },
    created() {
        this.loadProducts(null);
    },
    methods: {
        onSearchProducts({ term }) {
            this.loadProducts(term);
        },
        async loadProducts(searchTerm) {
            this.loading = true;

            let response;

            try {
                response = await fetchProducts(this.currentCategoryId, searchTerm);

                this.loading = false;
            } catch (e) {
                this.loading = false;

                return;
            }
            this.products = response.data['hydra:member'];
        },
    },
};
</script>

<style>

</style>
