// app.js
import { Nexus }  from './nexus.js'
import Counter from './components/counter.js';


const framework = new Nexus();
const counter = new Counter();


framework.registerComponent(counter);
framework.render();
