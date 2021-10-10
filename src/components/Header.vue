<template>
  <div>
    <div class="header" >
      Property selector
      <div class="align">
        <span>Monopoly Inc.
          <span v-if="subpropChecked.names.length==1"> | {{ subpropChecked.names}}</span>
          <span v-else-if="subpropChecked.names.length==0"></span>
          <span v-else> | Multiple items selected</span>
        </span>
        <span>&#709;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
    name: 'Header',
    data () {
        return{
            hideMode: true,
        }
    },
    props: {
        subpropChecked: Object
    },
    mounted() {
        console.log('test odo')
    }
})
</script>
<style scoped>
</style>
