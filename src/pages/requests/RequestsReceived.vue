<template>
<div>
    <base-card>
        <header>
            <h2>Requests</h2>
        </header>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <ul>

        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
</div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default {
    data() {
        return {
            error: null,
            isLoading: false
        }
    },
    computed: {
        receivedRequests() {
            return this.$store.getters["requests/requests"];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        }
    },
    created() {
        this.fetchRequests();
    },
    methods: {
        async fetchRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests')
            } catch(error) {
                this.error = error.message || 'Something went wrong!'
            }
            this.isLoading = false
        },
        handlerError() {
            this.error = null
        }
    },
    components: { RequestItem }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>