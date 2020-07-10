<template>
    <div class="container-fluid">
        <div class="row">
            <sidebar
                :collapsed="sidebarCollapsed"
                :class="asideClass"
                @toggle-collapsed="toggleSidebarCollapsed"
            />
            <div :class="contentClass">
                <Catalog />
            </div>
        </div>
    </div>
</template>

<script>
import Catalog from '@/components/catalog';
import Sidebar from '@/components/sidebar';

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
    },
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },
};
</script>
