export default {
  data() {
    return {
      mixin: {
        test: 'mixinTest'
      }
    }
  },
  methods: {
    mixinTest() {
      console.log('This is mixin method')
    }
  }
}
// vue에서 쓰는 절대경로는 @를 사용
// '@/components/mixin/commonMixin'
// js에 있는 변수를 vue에 경로를 붙여줘서 변수를 불러올수있다
