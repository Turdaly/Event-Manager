<template>
  <div>
    <div class="t-mb-5"><HeaderMenu/></div>
    <FormEvent >
      <template v-slot:title>
        Прямую Трансляцию
      </template>
      <template v-slot:paragraph>
        трансляции
      </template>
      <template v-slot:labelTitle>
        Названия
      </template>
      <template v-slot:labelUrl>
        Ссылка трансляции
      </template>
      <template v-slot:textBtn>
        Трансляцию
      </template>
    </FormEvent>
  </div>
</template>

