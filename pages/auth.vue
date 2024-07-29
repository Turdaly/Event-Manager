<template>
  <div class="t-flex t-flex-col t-items-center t-gap-4 t-px-4">
    <div
      class="t-bg-white t-px-4 t-py-6 t-shadow-lg t-rounded-md t-w-full t-max-w-md"
    >
      <div class="t-flex t-justify-center">
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        ></GoogleSignInButton>
      </div>
      <h1 class="t-text-4xl t-text-center t-my-8">Sign Up</h1>
      <v-form
        ref="form"
        @submit.prevent="submit"
        class="t-flex t-flex-col t-gap-2 t-w-full"
      >
        <v-text-field
          v-model="name"
          :rules="[rules.required]"
          label="Name"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Email"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          label="Password"
          variant="outlined"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="repassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min, rules.matchPassword(password)]"
          :type="show1 ? 'text' : 'password'"
          label="Re-enter Password"
          variant="outlined"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn class="text-capitalize t-w-full" type="submit" size="large" color="#5271ff"
          >Sign Up</v-btn
        >
        <NuxtLink
          :to="{ name: 'login' }"
          class="t-text-sm t-text-accent t-text-center"
        >
          <p class="t-mt-2">Already have an account? Log In</p>
        </NuxtLink>
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
const show1 = ref<boolean>(false);
const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const repassword = ref<string>("");

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
        auth.user.name = decoded.name;
        auth.user.given_name = decoded.given_name;
        auth.user.email = decoded.email;
        auth.user.picture = decoded.picture;
      }
    }
    navigateTo({ name: "index" });
  }
};

const handleLoginError = () => {
  console.error("Login failed");
};
</script>
