export default function App() {
return (

    <div className="App">
        <Logo/>
        <Forum1/>
        <SuitcaseList/>
        <Status/>

    </div>
);
}

function Logo(){

    return <h1> Far Way</h1>

}

function Forum1(){


    return (

        <div className= "subject1">
            <h3>Where are you going for the trip</h3>
            <select>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>


            <input type="text" placeholder="item.."/>
            <button>Add</button>
        </div>

    );
}

function SuitcaseList(){

    return (

        <div className= "subject2">LIST</div>
    );
}

function Status(){

    return(

        <footer>
            <em> The total lists available are </em>
        </footer>
    );
}


