<template>
  <div id="app">
    <Header :subpropChecked="subpropChecked" />
    <PrimarySelector v-for="(property,index) in localData.properties" :key="index" :subpropChecked="subpropChecked" :property="property" />

    <!-- <div :class="{'hide': hideMode}">
      <div v-for="(property, index) in properties" :key="index">
        <div class="property border p-t-b-7 align">
          {{property.name}}
          <input type="checkbox" @click="checkAll" v-model="isCheckAll" />
        </div>

        <div
          class="subproperty border p-t-b-7 align"
          v-for="(subproperty,index) in property.subproperties"
          :key="index"
        >
          {{subproperty}}
          <input
            type="checkbox"
            v-bind:value="subproperty"
            v-model="subprop"
            @change="updateCheckall"
          />
        </div>
      </div>
      <div class="apply-btn" @click="hideMode = !hideMode">Apply</div>
    </div> -->
  </div>
</template>

<script>
import localData from "./helpers/localData";
import Header from './components/Header';
import PrimarySelector from './components/PrimarySelector.vue';

export default {
  name: 'App',
  components: {
    Header,
    PrimarySelector
  },
  data() {
    return{
      localData: localData,
      subpropChecked: {
        names: [],
        ids: []
      }
    }
  },
  mounted() {
    console.log(localData)
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
  text-align: left;
  width: 350px;
}
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
.property {
  background-color: #ebebeb;
  padding-left: 10px;
}
.subproperty {
  padding-left: 20px;
}
.border {
  border: 1px solid #cccccc;
}
.p-t-b-7 {
  padding-top: 7px;
  padding-bottom: 7px;
}
.align {
  display: flex;
  justify-content: space-between;
}

.apply-btn {
  text-align: Center;
  color: #2195f1;
  border-top: 1px solid #2195f1;
}
</style>
