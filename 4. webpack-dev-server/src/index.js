import Person from './person'
import './styles/style.css'
import './styles/style.less'
import './styles/style.scss'
import webpack from './images/webpack.png'

const newPerson = new Person('Mikun', 16, 'HatsuneKoku')
console.log(newPerson);

document.querySelector('.img img').src = webpack