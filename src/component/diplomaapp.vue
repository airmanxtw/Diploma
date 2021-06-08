<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>南臺科技大學畢業證書預約</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>未登入</span>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col>
          <p class="mt-3">預約注意事項:.......</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <loginbutton />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import loginbutton from "component/loginbutton.vue";
export default {
  components: {
    loginbutton,
  },
};
</script>
