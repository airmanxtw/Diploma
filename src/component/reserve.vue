<template>
  <v-card class="mx-auto" max-width="344" v-if="islogin">
    <v-card-title>預約</v-card-title>
    <v-card-text>
      <div v-if="reserve">
        <p>
          您己完成預約，預約編號：{{ reservenumber }}<br />
          預約時段：{{ reserveday }}
        </p>
        <v-btn class="mb-7" @click="clearreserve">取消預約</v-btn>
      </div>
      <div v-else>
        <v-form ref="form" v-model="valid">
          <v-select
            :items="days"
            :rules="dayRules"
            v-model="selectdays"
            required
            clearable
            label="請選擇預約日期"
          ></v-select>
          <v-select
            :items="regions"
            :rules="regionRules"
            v-model="selectregions"
            required
            clearable
            label="請選擇預約時段"
          ></v-select>

          <v-btn class="mb-7" @click="addreserve">預約</v-btn>
        </v-form>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-snackbar bottom absolute v-model="snackbar" color="red text--white"
        >{{ message }}
        <template v-slot:action="{ attrs }">
          <v-btn color="text--white" text v-bind="attrs" @click="snackbar = false">
            關閉
          </v-btn>
        </template>
      </v-snackbar>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { getdays, getregions, addreserve, clearreserve } from "methods/webapi";
export default {
  data: () => {
    return {
      valid: false,
      days: [],
      selectdays: null,
      regions: [],
      selectregions: null,
      snackbar: false,
      message: "",
      dayRules: [(v) => v != null || "請選擇日期"],
      regionRules: [(v) => v != null || "請選擇時段"],
    };
  },
  computed: {
    ...mapGetters([
      "reserve",
      "islogin",
      "loginuser",
      "reserveday",
      "reservenumber",
      "canloaddays",
    ]),
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
    selectdays: function (newval, oldval) {
      getregions(newval).then((res) => {
        this.regions = res.data;
      });
    },
  },
  methods: {
    ...mapMutations(["setreserve"]),
    addreserve: function () {
      this.$refs.form.validate();
      if (this.valid) {
        addreserve(this.loginuser.key, this.selectdays, this.selectregions).then(
          (res) => {
            if (res.data.state) {
              this.setreserve({
                reserve: res.data.reserve,
                reserveday: res.data.reserveday,
                reservenumber: res.data.reservenumber,
              });
            } else {
              this.snackbar = true;
              this.message = res.data.message;
            }
          }
        );
      }
    },
    clearreserve: function () {
      clearreserve(this.loginuser.key).then((res) => {
        if (res.data.state) {
          this.setreserve({
            reserve: res.data.reserve,
            reserveday: res.data.reserveday,
            reservenumber: res.data.reservenumber,
          });
        } else {
          this.snackbar = true;
          this.message = res.data.message;
        }
      });
    },
  },
};
</script>
