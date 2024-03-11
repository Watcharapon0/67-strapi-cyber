module.exports = {
    async beforeCreate(event){
        console.log('beforeCreate is work!',event.params)
        event.params.data.mobile = 'yxz'
    }
}