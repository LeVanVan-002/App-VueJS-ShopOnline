import Vue from 'nativescript-vue';
// import store from './store'
import HelloWorld1 from './components/HelloWorld1';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;
import RadListView from 'nativescript-ui-listview/vue'
Vue.use(RadListView)
new Vue({

    template: `
        <Frame>
            <HelloWorld1 />
        </Frame>`,

    components: {
        HelloWorld1
    }
}).$start();