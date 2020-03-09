import Vue from 'vue';

Vue.directive('title', {
    inserted: function (el, binding) {
        el.style.display = "none";
        window.onscroll = function () {
            console.log(document.documentElement.scrollTop);

            if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
                //显示
                el.style.display = "block"
            } else {
                //隐藏
                el.style.display = "none"
            }
        }
    },
    unbind() {
        window.onscroll = null;
    }
})