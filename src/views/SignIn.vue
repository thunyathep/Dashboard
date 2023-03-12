<template>
    <div class="m-auto w-50">
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="name" label="Name:" label-for="name">
                <b-form-input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Enter your name"
                    required
                ></b-form-input>
            </b-form-group>

                <b-form-group
                    id="input-group-1"
                    type="email"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        required
                        placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
            >
                <b-form-input
                    id="input-2"
                    type="password"
                    v-model="password"
                    required
                    placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
import{
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
}from 'firebase/auth';
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            },
        }
    },
    created() {
        const auth = getAuth();
        onAuthStateChanged(getauth(), (user) => {
            if (user) {
                this.$router.push('/').catch(() => {});
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                //const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
                .then(async(userCredential) => {
                    await updateProfile(userCredential.user, {
                        displayName: this.form.name,
                    });
                    this.$router.push('/home').catch(() => {});
                    // ...
                })
                .catch((error) => {
                    alert(error.message);
                    // ..
                });
        },
        onReset(event) {
            event.preventDefault()
            // Prevent form submission
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
        },
    },
}
</script>