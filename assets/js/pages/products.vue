<template>
    <div class="container-fluid">
        <div class="row">
            <sidebar
                :collapsed="sidebarCollapsed"
                :current-category-id="currentCategoryId"
                :class="asideClass"
                @toggle-collapsed="toggleSidebarCollapsed"
            />
            <div :class="contentClass">
                <Catalog :current-category-id="currentCategoryId" />
            </div>
        </div>
    </div>
</template>

<script>
import Catalog from '@/components/catalog';
import Sidebar from '@/components/sidebar';
import { getCurrentCategoryId } from '@/services/page-context';

export default {
    name: 'Products',
    components: {
        Catalog,
        Sidebar,
    },
    data() {
        return {
            sidebarCollapsed: false,
        };
    },
    computed: {
        asideClass() {
            return this.sidebarCollapsed ? 'aside-collapsed' : 'col-xs-12 col-3';
        },
        contentClass() {
            return this.sidebarCollapsed ? 'col-xs-12 col-10' : 'col-xs-12 col-9';
        },
        currentCategoryId() {
            return getCurrentCategoryId();
        },
    },
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },
};
</script>
