<template>
  <div>
    <div class="t-mb-5"><HeaderMenu /></div>
    <FormEvent>
      <template v-slot:title> Вебинар </template>
      <template v-slot:paragraph> вебинаре </template>
      <template v-slot:labelTitle> Названия </template>
      <template v-slot:labelUrl> Ссылка вебинара </template>
      <template v-slot:textBtn> Вебинар </template>
    </FormEvent>
  </div>
</template>
