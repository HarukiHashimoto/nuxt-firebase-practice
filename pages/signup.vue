<template lang="pug">
  div
    section.section.no-top-pad
      h5.title.is-5
        | サインアップ
      div.columns.is-centered.is-mobile
        div.column.is-half-desktop.is-full-mobile.is-full-tablet
        form(@submit.prevent="onSignUp")
          b-field
            label.label
              | Name
            div.control
              b-input.input(type="text" name="displayName" v-model="displayName" v-validate="'required|min:4'" :class="{ 'is-danger': error.has('displayName') }")
              p.help.is-danger(v-show="errors.has('displayName')")
                | {{ errors.first('displayName') }}
          b-field
            label.label
              | Email
            div.control
              b-input.input(type="email" name="email" v-model="email" v-validate="'required|email'" :class="{ 'is-danger': errors.has('email') }") 
              p.help.is-danger(v-show="errors.has('email')")
                | {{ errors.first('email') }}
          b-field
            label.label
              | Password
            div.control
              b-input.input(type="password" name="password" v-model="password" v-validate="'required|min:6'" :class="{ 'is-danger': errors.has('password') }")
              p.help.is-danger(v-show="errors.has('password')")
                | {{ errors.first('password') }}
          b-field
            div.control
              b-button(type="is-primary" :class="{ 'is-loading': busy }" :disable="busy")
                | SignUp
</template>