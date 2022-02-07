import './App.css';
import MainStats from './components/MainStats';
import Navbar from './components/Navbar';
import Ticket from './components/Ticket';
import People from './components/People';

function App() {
  let backlog = "Next Ticket in Backlog";
  let progress = "Next Ticket in Progress";
  let finished = "Most Recent Finished Ticket";
  let members = "Members";
  let managers = "Managers";
  let developers = "Developers";



  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <section className='leftside'>
          <div className='headerSection'>
            <div className='titleSection'>
              <h1 id='milestoneTitle'>Milestone Name 3</h1>
              <h2>Completion: 68%</h2>
            </div>
            <div id='buttonContainer'>
              <button>Edit Milestone</button>
              <button>Ticket Board</button>
            </div>
          </div>
          <div className='ticketContainer'>
            <Ticket title={backlog}/>
            <Ticket title={progress}/>
            <Ticket title={finished}/>
          </div>
          <div className='peopleContainer'>
            <People title={members}/>
            <People title={managers}/>
            <People title={developers}/>
          </div>
        </section>
        <section className='rightside'>
          <MainStats/>
        </section>
      </div>
    </div>
  );
}

export default App;
