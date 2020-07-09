<template>
    <aside class="col-xs-12 col-3">
        <div
            :class="componentClass"
        >
            <div v-if="!collapsed">
                <h5 class="text-center">
                    Categories
                </h5>
                <ul class="nav flex-column mb4">
                    <li
                        v-for="(category, index) in categories"
                        :key="index"
                        class="nav-item"
                    >
                        <a
                            class="nav-link"
                            :href="category.link"
                        >
                            {{ category.name }}</a>
                    </li>
                </ul>
                <hr>
            </div>


            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-secondary btn-sm"
                    @click="toggleCollapsed"
                    v-text="collapsed ? '>>' : '<< Collapse'"
                />
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        testProp: {
            type: String,
            default: 'A am the default value',
        },
    },
    data() {
        return {
            collapsed: false,
            categories: [
                {
                    name: 'chien',
                    link: 'lol',
                },
                {
                    name: 'chat',
                    link: '#',
                },
                {
                    name: 'lapin',
                    link: '#',
                },
            ],
        };
    },
    computed: {
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5'];

            if (this.collapsed) {
                classes.push(this.$style.collapsed);
            }

            return classes;
        },
    },
    created() {
        console.log(this);
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.component {
  @include light-component;

  &.collapsed{
      width: 70px;
  }

  ul {
    li a:hover {
      background: $blue-component-link-hover;    }
  }
}
</style>
