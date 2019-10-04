<template lang="pug">
  //- Variables
  -
    var img_link = "https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png";
    var link_list = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Documentation",
        path: "documentation",
      },
      {
        name: "About",
        path: "about",
      },
      {
        name: "Contact",
        path: "contact",
      },
    ];

  //- HTML
  b-navbar
    template(slot="brand")
      b-navbar-item(tag="nuxt-link" :to="{ path: '/' }")
        img(src=img_link alt=alt_text)
    template(slot="start")
      each item in link_list
        b-navbar-item(tag="nuxt-link" :to=`{ path: '${ item.path }' }`)
          | #{ item.name }
    template(slot="end")
      b-navbar-item(tag="div")
        div.buttons
          a.button.is-primary
            strong Sign Up
          a.button.is-light
            | Login
</template>