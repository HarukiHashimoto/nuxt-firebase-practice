<template lang="pug">
  div
    section.section.no-top-pad
      h5.title.is-5
        | Sign Up
      hr
      div.columns.is-centered.is-mobile
        div.column.is-half-desktop.is-full-mobile.is-full-tablet
          form(@submit.prevent="onSignUp")
            b-field(label="Name")
              div.control
                b-input(type="text" name="displayName" v-model="displayName" v-validate="'required|min:4'" :class="{ 'is-danger': errors.has('displayName') }")
                p.help.is-danger(v-show="errors.has('displayName')")
                  | {{ errors.first('displayName') }}
            b-field(label="Email")
              div.control
                b-input(type="email" name="email" v-model="email" v-validate="'required|email'" :class="{ 'is-danger': errors.has('email') }") 
                p.help.is-danger(v-show="errors.has('email')")
                  | {{ errors.first('email') }}
            b-field(label="Password")
              div.control
                b-input(type="password" name="password" v-model="password" v-validate="'required|min:6'" :class="{ 'is-danger': errors.has('password') }")
                p.help.is-danger(v-show="errors.has('password')")
                  | {{ errors.first('password') }}
            b-field
              div.control
                button.button.is-primary(type="submit" :class="{ 'is-loading': busy }" :disable="busy")
                  | SignUp
</template>
<script>
import apiJobMixin from "@/mixins/apiJobMixin";
export default {
  data() {
    return {
      displayName: null,
      email: null,
      password: null
    };
  },
  mixins: [apiJobMixin],
  methods: {
    onSignUp() {
      console.log("ここ");
      
      // vee-validateによるバリデーションチェック
      this.$validator.validateAll().then(result => {
        if (result) {
          const signUpData = {
            displayName: this.displayName,
            email: this.email,
            password: this.password,
          };
          // storeで定義したsignUpUserアクションにdispatch
          this.$store.dispatch("signUpUser", signUpData);
        }
      });
    },
    jobsDone() {
      this.removeErrors();
      // アカウント登録が完了したためルートパスにリダイレクト
      this.$router.replace("/");
    }
  },
}
</script>