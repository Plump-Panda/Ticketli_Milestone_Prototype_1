import '../css/Ticket.css';

function Ticket(props){
    return(
        <div className="ticket">
            <h1>{props.title}</h1>
            <p className='ticketContent'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil
            </p>
        </div>
       
    );
}


export default Ticket