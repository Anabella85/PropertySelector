<template>
    <div>
        <div >
            <span class="align property border p-t-b-7 ">{{property.name}}
            <Checkbox 
                :subpropChecked="subpropChecked" 
                :property="property" 
                :isParent="true" 
                :isChecked="subpropChecked.ids.includes(property.id)" 
            />
            </span>
            <SecondarySelector v-for="(subproperty, index) in property.subproperties" 
                :key="index" 
                :subpropChecked="subpropChecked" 
                :subproperty="subproperty"
            />
        </div>
    </div>
    
</template>

<script>
import SecondarySelector from './SecondarySelector';
import Checkbox from './Checkbox.vue';

export default {
    name: 'PrimarySelector',
    
    components:{
        SecondarySelector,
        Checkbox
    },
    props: {
        property: Object,
        subpropChecked: Object
    }
}
</script>

<style scoped>
.property {
  background-color: #ebebeb;
  padding-left: 10px;
}
</style>
