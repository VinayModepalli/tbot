import { useState } from "react";
import './Styles.css';

function App() {
  const [Title, setTitle] = useState('Placement Alert')
  const [Description, setDescription] = useState(false)
  const [Package, setPackage] = useState(false)
  const [Link, setLink] = useState(false)
  const [DeadLine, setDeadLine] = useState(false)
  const [Eligibility, setEligibility] = useState(false)
  const msg = [
    "Off Campus season has started! Join our channel @PlacementNinja ASAP & ask your friends to join too..",
    "Don't miss out this opportunity! Also, for more job notifications, Join our @PlacementNinja community.. ",
    "Wishing everyone lots of love & success! - @PlacementNinja"
  ]
  function CopyToClipboard(id)
  {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <div className="container"  >
          <form className="form-signin" >
            <h2 className="form-signin-heading">Make me a Sandwitch</h2>
            <input type="text" className="form-control" placeholder="Title" required autofocus onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className="form-control" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="text" className="form-control" placeholder="Package" onChange={(e) => setPackage(e.target.value)} />
            <input type="text" className="form-control" placeholder="Link" required onChange={(e) => setLink(e.target.value)} />
            <input type="text" className="form-control" placeholder="Eligibility" onChange={(e) => setEligibility(e.target.value)} />
            <input type="date" className="form-control" placeholder="Deadline" onChange={(e) => setDeadLine(e.target.value)} data-date-inline-picker="true"/>
          </form>
          <h2>Telegram</h2>
          <div className="container output-box" id="tbox" onClick={()=>CopyToClipboard("tbox")}>
            <p>&#9200;&#127897; **{Title}** &#127897;&#9200;</p>
            {Description && (<><br />&#9997; {Description}<br /></>)}
            {Package && (<><br />&#128176; Package : {Package}<br /></>)}
            {/*<h4>&#128204;Apply Here :</h4>*/}
            {/*Link && (<span><br />** &#128204;<a href={Link}> Click Here to Apply</a> **<br /></span>)*/}
            {Link && (<span><br />**&#128204; Click Here to Apply : **<br />  {Link}<br /></span>)}

            {Eligibility && (<><br />&#x1F4D6; __ Eligibility : {Eligibility} __<br /></>)}
            {DeadLine && (<><br />&#128198; __ DeadLine : {DeadLine} __<br /></>)}
            <p>{msg[Math.floor(Math.random() * (msg.length) )]}</p>
          </div>
          <h2>How it looks like</h2>
          <div className="container output-box" id="box" onClick={()=>CopyToClipboard("box")}>
            <h3>&#9200;&#127897;{Title}&#127897;&#9200;</h3>
            <br />
            {Description && (<><h4>{Description}</h4><br /></>)}
            {Package && (<><h4>&#128176;Package : {Package}</h4><br /></>)}
            {/*<h4>&#128204;Apply Here :</h4>*/}
            {Link && (<h3>&#128204;<a href={Link}>Click Here to Apply</a></h3>)}
            <br />
            {Eligibility && (<em><h4><span className="logo">&#x1F4D6;</span>Eligibility : {Eligibility}</h4><br /></em>)}
            {DeadLine && (<em><h4><span className="logo">&#128198;</span>DeadLine : {DeadLine}</h4><br /></em>)}
            <h4>{msg[Math.random()%msg.length]}</h4>
          </div>
          <br />
          
        </div>
      {/*</header>*/}
      <br />
    </div>
  );
}

export default App;