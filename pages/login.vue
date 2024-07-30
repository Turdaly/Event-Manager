<template>
  <div class="t-flex t-flex-col t-items-center t-gap-2 t-px-4">
    <div class="t-w-full md:t-max-w-md t-px-4 t-py-6 t-shadow-lg t-rounded-md">
      <div class="t-flex t-justify-center">
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        ></GoogleSignInButton>
      </div>
      <h1 class="t-text-4xl t-text-center t-my-8 t-text-">Log In</h1>
      <v-form
        ref="form"
        @submit.prevent="submit"
        class="t-flex t-flex-col t-gap-2"
      >
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Email"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          type="password"
          label="Password"
          variant="outlined"
        ></v-text-field>
        <v-btn
          type="submit"
          size="large"
          color="#5271ff"
          class="text-capitalize w-100"
          >Sign Up</v-btn
        >
        <NuxtLink
          :to="{ name: 'auth' }"
          class="t-text-sm t-text-accent t-text-center"
          ><p class="t-mt-2">Create a new account</p></NuxtLink
        >
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

definePageMeta({
  layout: "auth",
});

const form = ref<any>();
const email = ref<string>("");
const password = ref<string>("");
const submit = async () => {
  try {
    await form.value
      .validate()
      .then(
        async (v: {
          valid: boolean;
          errors: { id: string; errorMessages: string[] }[];
        }) => {
          if (v.valid) {
            await auth.fetchUser();
            if (
              auth.validateUserCredentials(email.value, password.value)

            ) {
              console.log('navigate to index')
              return navigateTo({ name: "index" });
            }
          }
        }
      );
  } catch (err) {
    console.log(err);
  }
};

const auth = useAuth();
const handleLoginSuccess = (response: CredentialResponse) => {
  if (response) {
    if (response.clientId) {
      const clientId = useCookie("clientId");
      clientId.value = response.clientId;
    }
    if (response.credential) {
      const token = useCookie("token");
      token.value = response.credential;
      const decoded = decodeJwt(token.value);
      if (decoded) {
        console.log(decoded);
        auth.user.name = decoded.name;
        auth.user.given_name = decoded.given_name;
        auth.user.email = decoded.email;
        auth.user.picture = decoded.picture;
      }
    }
  }
  navigateTo({ name: "index" });
};

const handleLoginError = () => {
  console.error("Login failed");
};
</script>
