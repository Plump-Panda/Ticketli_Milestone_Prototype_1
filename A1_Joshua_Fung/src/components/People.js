import '../css/People.css';

function People(props){
    return(
        <div className="people">
            <h1 id='peopleTitle'>{props.title}</h1>

            <section className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </section>

            <section className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </section>

            <section className='peopleWrapper'>
                <div id='circle'/>
                <div className='personName'>
                    John Snow
                </div>
            </section>
        </div>
       
    );
}


export default People