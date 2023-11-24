import Header from './components/Header';
import CRUD from './components/CRUD';
import AddPlant from './components/AddPlant';
import './styles.css'; 


const App = () => {
    return (
        <div>
            <Header />
            <AddPlant />
            <CRUD />
            
        </div>
    )
}
export default App;