import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import TextMessage from './components/TextMessage.jsx';
import WindowFrame from './components/WindowFrame.jsx';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      statusMsg: '',
      depressed: false,
      unhappy: false,
      ok: false,
      happy: true,
      currentImg: 'http://media.giphy.com/media/xTiTnwsIlsMTguNfnq/giphy.gif',

    }
  }

  componentDidMount() {
    var context = this;
    setInterval(function() {
      context.checkFoodLevel();
      context.updateCurrentImg();
      context.checkEntertainmentLevel();
    }, 5000);
  }

updateCurrentImg() {
  var ryanGifs = {
  shocked: 'http://cfile9.uf.tistory.com/image/244A0F475830735605EC9B',
  unhappy: 'https://s-media-cache-ak0.pinimg.com/originals/02/e6/bb/02e6bbceb1637bdd8dcfeffe294a5bd0.gif',
  happy: 'https://68.media.tumblr.com/54b5f258857096c27fce32a1c8d88f27/tumblr_o89mumVWSH1vw7kwpo1_500.gif',
  depressed: 'https://s-media-cache-ak0.pinimg.com/originals/34/11/42/341142ea9f45c1d98b6376e2c861ef19.gif',
  ok: 'https://s-media-cache-ak0.pinimg.com/originals/a3/66/fc/a366fc5f8bca21027643946fbb95bd67.gif'
  }
  if( this.state.happy === true ) {
    this.setState({currentImg: ryanGifs.happy})

  } else if (this.state.unhappy === true) {
    this.setState({currentImg: ryanGifs.unhappy})

  } else if (this.state.ok === true) {
    this.setState({currentImg: ryanGifs.ok})

  } else if (this.state.depressed === true) {
    this.setState({currentImg: ryanGifs.depressed})
  }

}


updateStatusMessage () {
  var unhappyMessages = ["I'm so hungry, omg.", "Food...Food...Food...Food.", "May I have something to eat, please?", "Some food would be nice."];
 
  var happyMessages = ["Life is good!", "Everything is going to be OK!", "Feeling super positive!", "Happy! Happy! Happy!"];

  var okMessages = ["I just...really wish I had some more food.", "Things aren't bad.  They're just...meh", "I'm not sure if I'm hungry or just bored.", "I think I ate the last of my snacks"];

  var depressedMessages = ["Omg omg omg omg.", "Blimey, but couldn't I get a piece of steak!", "I didn't expect it to be this way.", "Gods above!  Hit that feed button!"];
  //check emotional state
  //if happy, set message state to happy
  //if unhappy, set message state to unhappy
  var randomIndex = Math.floor(Math.random() * 4);
  if (this.state.happy === true) {
    this.setState({statusMsg: happyMessages[randomIndex]});
  }
  if (this.state.ok === true) {
    this.setState({statusMsg: okMessages[randomIndex]});
  }
  if (this.state.depressed === true) {
    this.setState({statusMsg: depressedMessages[randomIndex]});
  }
  if (this.state.unhappy === true) {
    this.setState({statusMsg: unhappyMessages[randomIndex]});
  }
}

checkFoodLevel() {
  $.ajax({
  url: '/interval/feed', 
  method: 'GET',
  success: (foodLevel) => {
    console.log('foodLevel: ', foodLevel)
    if ( foodLevel <= 100 && foodLevel >= 85) {
      this.setState({unhappy: false});
      this.setState({depressed: false});
      this.setState({ok: false});
      this.setState({happy: true});

      this.updateCurrentImg();
      this.updateStatusMessage();
    }
    if ( foodLevel <= 80 && foodLevel >= 55) {
      this.setState({happy: false});
      this.setState({unhappy: false});
      this.setState({depressed: false});
      this.setState({ok: true});

      this.updateCurrentImg();
      this.updateStatusMessage();
    }
    if ( foodLevel <= 50 && foodLevel >= 35) {
      this.setState({happy: false});
      this.setState({depressed: false});
      this.setState({ok: false});
      this.setState({unhappy: true});

      this.updateCurrentImg();
      this.updateStatusMessage();
    }
    if ( foodLevel <= 30 ) {
      this.setState({happy: false});
      this.setState({unhappy: false});
      this.setState({ok: false});
      this.setState({depressed: true});

      this.updateCurrentImg();
      this.updateStatusMessage();
    }
  },
  error: (err) => {
    console.log('err', err);
  }
});
}

feedPet() {

    $.ajax({
      url: '/feed', 
      method: 'GET',
      success: () => {
      },
      error: (err) => {
        console.log('err', err);
      }
    });
}

checkEntertainmentLevel() {
  $.ajax({
  url: '/interval/play', 
  method: 'GET',
  success: (entertainmentLevel) => {
  console.log('entertainmentLevel: ', entertainmentLevel)
  // if ( entertainmentLevel <= 60 ) {
  //   this.updateHungerMsg();
  // }
    //if foodlevel is above 50
      //render a happy message
    //if foodLevel is below 50
      //render a hungry message
  },
  error: (err) => {
    console.log('error in checkEntertainmentLevel', err);
  }
});
}

playWithPet() {
  $.ajax({
    url: '/play', 
    method: 'GET',
    success: (entertainmentLevel) => {
    },
    error: (err) => {
      console.log('error in playwithpet', err);
    }
  });
}


  render () {
    return (<div className="container">
      <h1 className="text-center"><span className="retro">Retro</span><span className="rock">Gotchi</span></h1>
      <WindowFrame currentImg={this.state.currentImg}/>
      
      
      <TextMessage statusMsg={this.state.statusMsg}/>
      
      <button className="btn-block" id="foodButton" onClick={this.feedPet}>Feed</button>

      <button className="btn-block" id="playButton" onClick={this.playWithPet}>Play</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));