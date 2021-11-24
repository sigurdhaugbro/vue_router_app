import Home from './views/Home.vue';
import Component from './views/Component.vue';
import About from './views/About.vue';
import Form from './views/Form.vue';
import Slideshow from './views/Slideshow.vue';

/* 
	"param" 			:test
				->		$route.params.test;
*/

/* prettier-ignore */
export default [
	{ name: 'about', 		path: '/about', 			component: About },
	{ name: 'component', path: '/:component_id', component: Component },
	{ name: 'home', 		path: '/', 					component: Home },
	{ name: 'form',		path: '/form',				component: Form },
	{ name: 'slideshow',	path: '/slideshow',		component: Slideshow }
	

	// { name: 'not-found' }
]
