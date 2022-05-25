<template>
    <div>
        <div v-if="isLoading">Загрузка...</div>

        <template v-else>
            <button v-if="availableButtons.includes('first')">Это типовая кнопка</button>

            <button v-if="availableButtons.includes('second')">Это другая кнопка</button>

            <button v-if="availableButtons.includes('third')" disabled>Заблокированная кнопка</button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'TestPage',

    props: {
        id: {
            type: [String, Number],
            required: true,
        },
    },

    data() {
        return {
            isLoading: true,
        };
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 5000);
    },

    computed: {
        availableButtons() {
            const buttonTypes = [
                'first',
                'second',
                'thrird',
            ];

            return buttonTypes.filter(() => Math.floor(Math.random(1) * 10) > 4);
        },
    },
};
</script>