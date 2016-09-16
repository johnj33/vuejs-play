export default {
    data: function () {
        return{
            message: "somedata"
        }
    },
    methods: {
        buttonPressed: function () {
            this.message = "updated"
            console.log('got here')
        }
    }
}