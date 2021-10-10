<template>
    <input type="checkbox" :checked="isChecked" @click="onClick">
</template>
<script>

export default ({
    name: 'Checkbox',
    props:{
        isChecked: Boolean,
        property: Object,
        subpropChecked: Object,
        isParent: Boolean
    },

    methods:{
        filterElements: function(value, localArr){
            return localArr.filter((localValue)=>{
                return value !== localValue
            })
        },

        onClick: function(){
            let localSubprop= {...this.subpropChecked}

            if(this.isChecked){
                this.subpropChecked.ids = this.filterElements(this.property.id, localSubprop.ids)
                this.subpropChecked.names = this.filterElements(this.property.name, localSubprop.names)
                localSubprop.ids= [...this.subpropChecked.ids]
                localSubprop.names= [...this.subpropChecked.names]
            }else{
                this.subpropChecked.ids.push(this.property.id);
                this.subpropChecked.names.push(this.property.name);
            }

            // if(this.subpropChecked.ids.includes(property.id) && this.subpropChecked.id === this.subParentId){
            //     this.subpropChecked.ids.push(this.id);
            //     this.subpropChecked.names.push(this.name);
            // }else{
            //     this.subpropChecked.ids = this.filterElements(this.id, localSubprop.ids)
            //     this.subpropChecked.names = this.filterElements(this.name, localSubprop.names)
            // }

            if(this.isParent){
                if(this.isChecked ){
                    for(var i=0; i < this.property.subproperties.length; i++){
                        console.log('test')
                        this.subpropChecked.ids = this.filterElements(this.property.subproperties[i].id, localSubprop.ids)
                        this.subpropChecked.names = this.filterElements(this.property.subproperties[i].name, localSubprop.names)
                        localSubprop.ids= [...this.subpropChecked.ids]
                        localSubprop.names= [...this.subpropChecked.names]
                    }
                }
                else{
                    for(var i=0; i < this.property.subproperties.length; i++){
                        this.subpropChecked.ids.push(this.property.subproperties[i].id);
                        this.subpropChecked.names.push(this.property.subproperties[i].name);

                    }
                }
            }
        }
       
    }

})
</script>
<style>

</style>