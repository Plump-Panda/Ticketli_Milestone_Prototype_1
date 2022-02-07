import '../css/People.css';

function People(props){
    return(
        <div className="people">
            <h1 id='peopleTitle'>{props.title}</h1>

            <div className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </div>

            <div className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </div>

            <div className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </div>
        </div>
       
    );
}


export default People