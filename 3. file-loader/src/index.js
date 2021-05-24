import Person from './person.js'
import './styles/style.css'
import './styles/style.less'
import './styles/style.scss'
import webpack from './images/webpack.png'

const Mikun = new Person('Mikun', 16, 'Hatsunekoku')
console.log(Mikun);

document.querySelector('.img img').src = webpack