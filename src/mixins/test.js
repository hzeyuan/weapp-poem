import wepy from 'wepy'
import { Translate } from '../../libs/wordsTranslate.min.js';

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    },
    
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }

  translate(txt,type=1){
    console.log('123');
    const translate = new Translate();
    console.log('转换',txt);
    return translate.ToSimplifiedChinese(txt)
  }
}
