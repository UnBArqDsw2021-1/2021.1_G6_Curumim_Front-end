import CurumimBackEnd from './config.js'

const auth = {
    mixins: [CurumimBackEnd],
    data () {
      return {}
    },
    methods: {
        login () {
            console.log(CurumimBackEnd + '/login')
        }
    }
}

export default auth