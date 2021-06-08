<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue darken-1 white--text" v-bind="attrs" v-on="on" v-if="!islogin">
        登入系統
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Privacy Policy </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.studno"
            :counter="20"
            :rules="requireRules"
            label="學號"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :counter="20"
            :rules="requireRules"
            label="密碼"
            required
            type="password"
          ></v-text-field>
        </v-form>
        <v-snackbar v-model="snackbar">snackbar</v-snackbar>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="login"> 登入 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { getloginuser } from "methods/webapi";
export default {
  data: () => {
    return {
      dialog: false,
      valid: true,
      snackbar: true,
      user: {
        studno: "",
        password: "",
      },
      requireRules: [(v) => !!v || "請輸入"],
    };
  },
  methods: {
    ...mapMutations(["setloginuser"]),
    login: function () {
      if (this.valid) {
        //let that=this;
        getloginuser.then((res) => {
          if (res.state) {
            this.setloginuser(res.loginuser);
            this.dialog = false;
          } else {
          }
        });
      }
    },
  },
  computed: {
    ...mapGetters(["islogin"]),
  },
};
</script>
