<template>
   <div id="app">
    <span  @click="hideMode = !hideMode"> 
      <Header  :subpropChecked="subpropChecked" />
    </span>
    <span :class="{'hide': hideMode}">
      <PrimarySelector 
        v-for="(property,index) in localData.properties" 
        :key="index" 
        :subpropChecked="subpropChecked" 
        :property="property" 
      />
      <div class="apply-btn" @click="Apply">Apply</div>
    </span>
  </div>
</template>

<script>
import localData from "./helpers/localData";
import Header from "./components/Header";
import PrimarySelector from "./components/PrimarySelector.vue";

export default {
  name: "App",
  components: {
    Header,
    PrimarySelector,
  },
  data() {
    return {
      hideMode: false,
      localData: localData,
      subpropChecked: {
        names: [],
        ids: [],
      },
    };
  },
  watch: {
    "subpropChecked.ids": {
      handler: function (newVal) {
        this.localData.properties.forEach((property) => {
          if (!newVal.includes(property.id)) {
            const hasAllChecked = this.checkElements(property, newVal);

            if (hasAllChecked) {
              this.subpropChecked.ids.push(property.id)

            }
          } else {
            const hasAllChecked = this.checkElements(property, newVal);
            if (!hasAllChecked) {
              this.subpropChecked.ids = this.filterElements(
                property.id,
                newVal
              );
            }
          }
        });
      },
      deep: true,
    },
    "subpropChecked.names": {
      handler: function (newValname) {
        this.localData.properties.forEach((property) => {
          if (!newValname.includes(property.name)) {
            const hasAllChecked = this.checkElements(property, newValname);

            if (hasAllChecked) {
              this.subpropChecked.names.push(property.name)
            }
          } else {
            const hasAllChecked = this.checkElements(property, newValname);
            if (!hasAllChecked) {
              this.subpropChecked.names = this.filterElements(
                property.name,
                newValname
              );
            }
          }
        });
      },
      deep: true,
    },
    
  },
  methods: {
    Apply:function() {
      console.log(this.subpropChecked.names);
      return this.subpropChecked.names;

    },
    filterElements: function (value, localArr) {
      return localArr.filter((localValue) => {
        return value !== localValue;
      });
    },
    checkElements: function (property, newVal) {
      let hasAllChecked = true;
      property.subproperties.forEach((subproperty) => {
        if (hasAllChecked) {
          hasAllChecked = newVal.includes(subproperty.id);
        }
      });
      return hasAllChecked;
    },
  },
};
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
.hide{
    display:none;
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
  text-align: center;
  color: #2195f1;
  border-top: 1px solid #2195f1;
}
</style>