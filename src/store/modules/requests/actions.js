export default {
    contactCoach(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachid,
            userEmail: payload.email,
            message: payload.message

        };
        context.commit('addRequest', newRequest)
    }
};