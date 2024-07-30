<template>
  <section>
    <div class="t-flex t-flex-col t-gap-4 t-bg-primary t-p-4">
      <h1 class="t-text-2xl t-font-medium t-text-center">
        Let's create your <slot name="title">Meeting</slot>
      </h1>
      <h3 class="t-text-center">
        Start with the key details about your
        <slot name="paragraph">Meeting</slot>
      </h3>
      <v-form
        ref="form"
        @submit.prevent="submit"
        class="t-flex t-flex-col t-gap-2"
      >
        <v-text-field
          v-model="title"
          :rules="[rules.required]"
          variant="outlined"
          color="#5271ff"
          base-color="#5271ff"
        >
          <template v-slot:label>
            <slot name="labelTitle">Meeting</slot> Title
          </template>
        </v-text-field>
        <div class="t-flex t-gap-2">
          <v-date-input
            v-model="startDate"
            :rules="[rules.required]"
            label="Start Date"
            variant="outlined"
            color="#5271ff"
            base-color="#5271ff"
            prepend-icon=""
            clearable
          ></v-date-input>
          <v-text-field
            v-model="startTime"
            :rules="[rules.required]"
            :active="modal2"
            :focused="modal2"
            label="Start Time"
            variant="outlined"
          >
            <v-dialog v-model="modal2" activator="parent" width="auto">
              <v-time-picker v-if="modal2" v-model="startTime"></v-time-picker>
            </v-dialog>
          </v-text-field>
        </div>
        <v-text-field
          v-model="link_address"
          :rules="[rules.required]"
          variant="outlined"
          color="#5271ff"
          base-color="#5271ff"
          ><template v-slot:label> <slot name="labelUrl"></slot> </template
        ></v-text-field>
        <v-btn
          :disabled="loading"
          :loading="loading"
          class="text-capitalize"
          type="submit"
          color="#5271ff"
          size="large"
        >
          Create <slot name="textBtn">Meeting</slot>
        </v-btn>
      </v-form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { VDateInput } from "vuetify/labs/VDateInput";
import { VTimePicker } from "vuetify/labs/VTimePicker";

const modal2 = ref(false);
const route = useRoute();
// form state
const form = ref<any>();
const title = ref<string>("");
const startDate = ref<string | null>(null);
const startTime = ref<string | null>(null);
const link_address = ref<string>("");

// Extra
const loading = ref<boolean>(false);

// Store
const auth = useAuth()
// form actions
const eventsStore = useEventsStore();
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
            loading.value === true;
            const data: Types.Event.MyEvent = {
              id: Date.now().toString(),
              email: auth.user.email,
              title: title.value,
              color: "#5271ff",
              type: getEventType(),
              isComplete: false,
              startDate: getStartDate(),
              startTime: startTime.value as string,
              link_address: link_address.value,
            };
            await eventsStore.postEvent(data);

            setTimeout(() => {
              loading.value = false;
            }, 2000);
            resetForm();
            navigateTo({ name: "my-events" });
          }
        }
      );
  } catch (err) {
    loading.value = false;
    console.log(err);
  }
};

const resetForm = () => {
  title.value = "";
  startDate.value = "";
  startTime.value = "";
  link_address.value = "";
};

// getting typeEvent
const getEventType = () => {
  const pathSegments = route.path.split("/");
  return pathSegments[pathSegments.length - 1] as Types.Event.TypeEvent;
};
const getStartDate = ():string => {
  if(startDate.value) return startDate.value.toString().slice(0, 10)
  else return ''
}

onMounted(() => {
  getEventType()
})
</script>
