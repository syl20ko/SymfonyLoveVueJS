<template>
    <div :class="$style.component">
        {{ categoryName }}
    </div>
</template>

<script>
export default {
    name: 'Title',
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
    computed: {
        categoryName() {
            if (this.currentCategoryId === null) {
                return 'All Products';
            }
            const category = this.categories.find((cat) => (cat['@id'] === this.currentCategoryId));

            return category ? category.name : '';
        },
    },
};
</script>

<style lang="scss" module>

.component {
    h1 {
        font-size : 4.7rem;
    }
}

</style>
