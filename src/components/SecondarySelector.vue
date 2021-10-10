<template>
    <div>
        <div>
            {{subproperty.name}}
            <Checkbox :subpropChecked="subpropChecked" :property="subproperty" :isChecked="subpropChecked.ids.includes(subproperty.id)" />
        </div>
    </div>
    
</template>
<script>
import Checkbox from './Checkbox.vue';
export default {
   name: 'SecondarySelector',
   components:{
       Checkbox
   },
   props:{
       subproperty: Object,
       subpropChecked: Object,
   }
}
</script>

<style >

</style>
