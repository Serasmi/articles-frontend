<template>
  <v-app>
    <v-app-bar color="blue darken-2" clipped-left fixed dark app>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Articles frontend</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
