<template>
  <v-card class="mx-auto" max-width="344" v-if="islogin">
    <v-card-title>預約</v-card-title>
    <v-card-text>
      <div v-if="reserve">
        <p>
          您己完成預約，預約編號：{{ loginuser.reservenumber }}<br />
          預約時段：{{ loginuser.reserveday }}
        </p>
        <v-btn>取消預約</v-btn>
      </div>
      <div v-else>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-select
            :items="days"
            :rules="dayRules"
            v-model="selectdays"
            required
            clearable
            label="請選擇預約日期"
          ></v-select>
          <v-btn @click="addreserve">預約</v-btn>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
import { getdays } from "methods/webapi";
export default {
  data: () => {
    return {
      valid: false,
      days: null,
      selectdays: null,
      regions: null,
      dayRules: [(v) => v != null || "請選擇日期"],
    };
  },
  computed: {
    ...mapGetters(["reserve", "islogin", "loginuser", "canloaddays"]),
  },
  watch: {
    canloaddays: function (newval, oldval) {
      if (newval) {
        let that = this;
        getdays(this.loginuser.key).then((res) => {
          that.days = res.data;
        });
      }
    },
  },
  methods: {
    addreserve: function () {
      if (this.valid) {
      }
      this.$refs.form.validate();
    },
  },
};
</script>
