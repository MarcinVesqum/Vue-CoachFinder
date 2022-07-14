<template>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="email">Your E-Mail</label>
            <input type="email" id="email" v-model.trim="emailInput"/>
        </div>
        <div class="form-control">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="messageInput"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['save-data-contact'],
    data() {
        return {
            emailInput: '',
            messageInput: '',
            formIsValid: true,
        }
    },
    methods: {
        submitData() {
            this.formIsValid = true;
            if (this.emailInput === '' || !this.emailInput.includes('@') || this.messageInput === '') {
                this.formIsValid = false;
                return;
            }

            const formData = {
                email: this.emailInput.val,
                message: this.messageInput.val
            }
            this.$emit('save-data-contact', formData)
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>