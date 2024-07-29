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
      <div class="t-flex t-flex-col">
        <v-text-field
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
            :rules="[rules.required]"
            label="Start Date"
            variant="outlined"
            color="#5271ff"
            base-color="#5271ff"
            prepend-icon=""
            clearable
          ></v-date-input>
          <v-text-field
            v-model="time"
            :rules="[rules.required]"
            :active="modal2"
            :focused="modal2"
            label="Start Time"
            variant="outlined"
          >
            <v-dialog v-model="modal2" activator="parent" width="auto">
              <v-time-picker v-if="modal2" v-model="time"></v-time-picker>
            </v-dialog>
          </v-text-field>
        </div>
        <v-text-field
          :rules="[rules.required]"
          variant="outlined"
          color="#5271ff"
          base-color="#5271ff"
          ><template v-slot:label>
            <slot name="labelUrl"></slot>
          </template></v-text-field
        >
        <v-btn class="text-capitalize" color="#5271ff" size="large">
          Create <slot name="textBtn">Meeting</slot>
        </v-btn>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { VDateInput } from "vuetify/labs/VDateInput";
import { VTimePicker } from "vuetify/labs/VTimePicker";
const time = ref(null);
const menu2 = ref(false);
const modal2 = ref(false);
</script>
