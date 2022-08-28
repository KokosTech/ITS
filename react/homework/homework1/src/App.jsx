import ButtonContainer from './components/ButtonContainer';

const App = () => {

  /*
    Хей,
    Съжалявам, че го изпращам днес, вместо вчера, 
    но не видях, че е за 27-ми (вместо 28-ми).

    Първоначалната ми имплементация (без реално 
    да прочета условието) беше следната:
      App (with useState for count)
        -> Count (with param count)
        -> ButtonContainer (with params count & setCount)
    Единственото, което промених след това е да преместя 
    *useState with count* & *Count* в ButtonContainer. И
    да премахна параметрите на ButtonContainer
  */

  return (
    <div className="App">
      <h1>Counting 101</h1>
      <ButtonContainer />
    </div>
  );
}

export default App;
