<template>
  <v-footer color="blue-grey-darken-4" height="auto" class="mt-8">
    <v-card
      flat
      tile
      class="lighten-1 white--text text-xs-center flex d-flex flex-column justify-center align-center"
      width="100%"
      color="blue-grey-darken-4"
    >
      <v-card-text class="white--text text-h6">Find Us On Social Media</v-card-text>
      <v-card-text class="py-0 d-flex flex-wrap flex-row justify-center align-center">
        <v-btn v-for="icon in icons" :key="icon" class="ma-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-center">
        &copy;2024 YYC taxPOD | Powered by YYC GST CONSULTANTS SDN BHD 201301043188 (1073010-M)
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi mdi-facebook',
      'mdi mdi-youtube',
      'mdi mdi-instagram',
      'mdi mdi-google-plus',
      'mdi mdi-linkedin'
    ]
  })
}
</script>
