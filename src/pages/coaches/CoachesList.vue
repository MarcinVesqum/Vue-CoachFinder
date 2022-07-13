<template>
    <section>
        <div></div>
        <label for="">filter</label>
        <input type="text">
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register as Coach</router-link>
            </div>
        
            <ul v-if="hasCoaches">
                <coach-item 
                v-for="coach in filteredCoaches" 
                :key="coach.id"
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :areas="coach.areas"
                :description="coach.description"
                :rate="coach.hourlyRate">
                </coach-item>
            </ul>
            <h3 v-else>No coaches found.</h3>
        </BaseCard>
        
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseCard from '../../components/UI/BaseCard.vue'
export default {
  components: { CoachItem, BaseCard },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>