import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://e4593a5912675b40.mokky.dev',
  });
  const apiTicket = axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2'
  })

  nuxtApp.provide('api', api);
  nuxtApp.provide('apiTicket', apiTicket);
});