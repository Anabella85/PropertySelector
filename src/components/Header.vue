<template>
  <div>
    <div  class="header" >
      Property selector
      <div class="align">
        <span>Monopoly Inc.
          <span v-if="subpropChecked.names.length == 1"> | {{subpropChecked.names}}</span>
          <span v-else-if="subpropChecked.names.length == 0"></span>
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
    }
})
</script>
<style scoped>
.header {
  background-color: #2195f1;
  padding: 7px 10px;
  color: white;
  font-size: 20px;
}
.header span {
  font-size: 15px;
  color: #bfbfbf;
}
</style>
