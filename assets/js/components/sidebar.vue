<template>
    <aside>
        <div
            :class="[$style.component, 'p-3', 'mb-5']"
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
                    @click="$emit('toggle-collapsed')"
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
        collapsed: {
            type: Boolean,
            require: true,
        },
    },
    data() {
        return {
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
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.component {
  @include light-component;

  ul {
    li a:hover {
      background: $blue-component-link-hover;    }
  }
}
</style>
