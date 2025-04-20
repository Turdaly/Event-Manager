<template>
  <div>
    <div class="t-mb-5"><HeaderMenu /></div>
    <FormEvent>
      <template v-slot:title> Онлайн Встречу </template>
      <template v-slot:paragraph> встрече </template>
      <template v-slot:labelTitle> Названия </template>
      <template v-slot:labelUrl>Ссылка встречи</template>
      <template v-slot:textBtn> Встречу </template>
    </FormEvent>
  </div>
</template>
