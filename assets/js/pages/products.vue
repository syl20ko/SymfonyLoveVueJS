<template>
    <div class="container-fluid">
        <div class="row">
            <sidebar
                :collapsed="sidebarCollapsed"
                @toggle-collapsed="toggleSidebarCollapsed"
            />
            <div class="col-xs-12 col-9">
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
    methods: {
        toggleSidebarCollapsed() {
            this.sidebarCollapsed = !this.sidebarCollapsed;
        },
    },
};
</script>
