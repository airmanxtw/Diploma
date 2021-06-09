<template>
  <v-card class="mx-auto" max-width="344" v-if="islogin">
    <v-card-title>預約</v-card-title>
    <v-card-text>
      <p v-if="reserve">
        您己完成預約，預約編號：{{ loginuser.reservenumber }}<br />
        預約時段：{{ loginuser.reserveday }}
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["reserve", "islogin", "loginuser"]),
  },
  methods: {},
};
</script>
