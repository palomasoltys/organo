import Banner from './components/Banner/Banner';
import TextBody from './components/TextBody/TextBody';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextBody label="Name" placeholder="Enter the character name"/>
      <TextBody label="House" placeholder="Enter the character house"/>
      <TextBody label="Image" placeholder="Enter the url of the image"/>

    </div>
  );
}

export default App;
