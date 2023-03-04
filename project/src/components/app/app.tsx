import CityPage from '../../pages/city-page/citi-page';
import {PlacesProps} from '../../index';
function App(props: PlacesProps): JSX.Element {
  return (<CityPage {... props}/>);
}

export default App;
