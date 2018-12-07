import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bulma from 'bulma/css/bulma.css'
import IPv6 from 'ip6'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {IP: '',BM:'1',
  IPaddress:'',ipfull:'',totalIPaddresses:'',network:'',networkrange:''
  ,networkrangeend:'',format:''
  }
    this.handleChangeIP = this.handleChangeIP.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._Calculator = this._Calculator.bind(this)
  }
  handleChangeIP(event){
    this.setState({IP: event.target.value})
  }
  _handleChange(event){
    this.setState({BM: event.target.value})
    
    
    }
    _Calculator(){
       this.setState({ipfull: IPv6.normalize(this.state.IP)})
       var resutl = Math.pow(2,128-this.state.BM)
       console.log("resutl"+resutl)
       this.setState({totalIPaddresses:resutl})
       this.setState({IPaddress:IPv6.abbreviate(this.state.IP)})
       this.setState({network:IPv6.abbreviate(this.state.IP)})
       var range
       if(this.state.BM>=64){
          range = IPv6.range(this.state.IP, this.state.BM, 128);
       }else{
        range = IPv6.range(this.state.IP, this.state.BM, 128);
       }
      console.log(range)
       this.setState({networkrangestart:range.start})
       this.setState({networkrangeend:range.end})
       this.setState({format:IPv6.ptr(this.state.IP,64)})
    }
  handleClick(event){
    // var data ={
    //   IP: this.state.IP,
    //   BM: this.state.BM
    // }
    console.log(this.state.IP)
   IPv6.normalize(this.state.IP)
    console.log(IPv6.normalize(this.state.IP))
    console.log(this.state.BM)
    
   
  }
  render() {
    return(
      <div>
          <div className="Container ">
      <div className="section" >
        
        <div className='columns is-mobile '>
          <div className='column'></div>

          <div className='column'>
          
         
          <h1 className="title is-1">IPv6 Calculator</h1>
          
          <h2>IP-Address</h2>
          <input
            className= "input is-info" 
            type='text'
            placeholder="IP-Address"
            onChange={this.handleChangeIP}>
          </input>
          <br />
         
          <h2>BM</h2>
          <div class="select is-primary">
          <select  onChange={this._handleChange}
          defaultValue={this.state.value}>
            <option value="1">1 (9,223,372,036,854,775,808 networks /64) </option>
            <option value="2">2 (4,611,686,018,427,387,904 networks /64)</option>
            <option value="3">3 (2,305,843,009,213,693,952 networks /64)</option>
            <option value="4">4 (1,152,921,504,606,846,976 networks /64)</option>
            <option value="5">5 (576,460,752,303,423,488 networks /64)</option>
            <option value="6">6 (288,230,376,151,711,744 networks /64)</option>
            <option value="7">7 (144,115,188,075,855,872 networks /64)</option>
            <option value="8">8 (72,057,594,037,927,936 networks /64)</option>
            <option value="9">9 (36,028,797,018,963,968 networks /64)</option>
            <option value="10">10 (18,014,398,509,481,984 networks /64)</option>
            <option value="11">11 (9,007,199,254,740,992 networks /64)</option>
            <option value="12">12 (4,503,599,627,370,496 networks /64)</option>
            <option value="13">13 (2,251,799,813,685,248 networks /64)</option>
            <option value="14">14 (1,125,899,906,842,624 networks /64)</option>
            <option value="15">15 (562,949,953,421,312 networks /64)</option>
            <option value="16">16 (281,474,976,710,656 networks /64)</option>
            <option value="17">17 (140,737,488,355,328 networks /64)</option>
            <option value="18">18 (70,368,744,177,664 networks /64)</option>
            <option value="19" >19 (35,184,372,088,832 networks /64)</option>
            <option value="20">20 (17,592,186,044,416 networks /64)</option>
            <option value="21" >21 (8,796,093,022,208 networks /64)</option>
            <option value="22">22 (4,398,046,511,104 networks /64)</option>
            <option value="23">23 (2,199,023,255,552 networks /64)</option>
            <option value="24">24 (1,099,511,627,776 networks /64)</option>
            <option value="25">25 (549,755,813,888 networks /64)</option>
            <option value="26">26 (274,877,906,944 networks /64)</option>
            <option value="27">27 (137,438,953,472 networks /64)</option>
            <option value="28">28 (68,719,476,736 networks /64)</option>
            <option value="29">29 (34,359,738,368 networks /64)</option>
            <option value="30">30 (17,179,869,184 networks /64)</option>
            <option value="31">31 (8,589,934,592 networks /64)</option>
            <option value="32">32 (4,294,967,296 networks /64)</option>
            <option value="33">33 (2,147,483,648 networks /64)</option>
            <option value="34">34 (1,073,741,824 networks /64)</option>
            <option value="35">35 (536,870,912 networks /64)</option>
            <option value="36">36 (268,435,456 networks /64)</option>
            <option value="37">37 (134,217,728 networks /64)</option>
            <option value="38">38 (67,108,864 networks /64)</option>
            <option value="39">39 (33,554,432 networks /64)</option>
            <option value="40">40 (16,777,216 networks /64)</option>
            <option value="41">41 (8,388,608 networks /64)</option>
            <option value="42">42 (4,194,304 networks /64)</option>
            <option value="43">43 (2,097,152 networks /64)</option>
            <option value="44">44 (1,048,576 networks /64)</option>
            <option value="45">45 (524,288 networks /64)</option>
            <option value="46">46 (262,144 networks /64)</option>
            <option value="47">47 (131,072 networks /64)</option>
            <option value="48">48 (65,536 networks /64)</option>
            <option value="49">49 (32,768 networks /64)</option>
            <option value="50">50 (16,384 networks /64)</option>
            <option value="51">51 (8,192 networks /64)</option>
            <option value="52">52 (4,096 networks /64)</option>
            <option value="53">53 (2,048 networks /64)</option>
            <option value="54">54 (1,024 networks /64)</option>
            <option value="55">55 (512 networks /64)</option>
            <option value="56">56 (256 networks /64)</option>
            <option value="57">57 (128 networks /64)</option>
            <option value="58">58 (64 networks /64)</option>
            <option value="59">59 (32 networks /64)</option>
            <option value="60">60 (16 networks /64)</option>
            <option value="61">61 (8 networks /64)</option>
            <option value="62">62 (4 networks /64)</option>
            <option value="63">63 (2 networks /64)</option>
            <option value="64">64 (18,446,744,073,709,551,616 addresses)</option>
            <option value="65">65 (9,223,372,036,854,775,808 addresses)</option>
            <option value="66">66 (4,611,686,018,427,387,904 addresses)</option>
            <option value="67">67 (2,305,843,009,213,693,952 addresses)</option>
            <option value="68">68 (1,152,921,504,606,846,976 addresses)</option>
            <option value="69">69 (576,460,752,303,423,488 addresses)</option>
            <option value="70">70 (288,230,376,151,711,744 addresses)</option>
            <option value="71">71 (144,115,188,075,855,872 addresses)</option>
            <option value="72">72 (72,057,594,037,927,936 addresses)</option>
            <option value="73">73 (36,028,797,018,963,968 addresses)</option>
            <option value="74">74 (18,014,398,509,481,984 addresses)</option>
            <option value="75">75 (9,007,199,254,740,992 addresses)</option>
            <option value="76">76 (4,503,599,627,370,496 addresses)</option>
            <option value="77">77 (2,251,799,813,685,248 addresses)</option>
            <option value="78">78 (1,125,899,906,842,624 addresses)</option>
            <option value="79">79 (562,949,953,421,312 addresses)</option>
            <option value="80">80 (281,474,976,710,656 addresses)</option>
            <option value="81">81 (140,737,488,355,328 addresses)</option>
            <option value="82">82 (70,368,744,177,664 addresses)</option>
            <option value="83">83 (35,184,372,088,832 addresses)</option>
            <option value="84">84 (17,592,186,044,416 addresses)</option>
            <option value="85">85 (8,796,093,022,208 addresses)</option>
            <option value="86">86 (4,398,046,511,104 addresses)</option>
            <option value="87">87 (2,199,023,255,552 addresses)</option>
            <option value="88">88 (1,099,511,627,776 addresses)</option>
            <option value="89">89 (549,755,813,888 addresses)</option>
            <option value="90">90 (274,877,906,944 addresses)</option>
            <option value="91">91 (137,438,953,472 addresses)</option>
            <option value="92">92 (68,719,476,736 addresses)</option>
            <option value="93">93 (34,359,738,368 addresses)</option>
            <option value="94">94 (17,179,869,184 addresses)</option>
            <option value="95">95 (8,589,934,592 addresses)</option>
            <option value="96">96 (4,294,967,296 addresses)</option>
            <option value="97">97 (2,147,483,648 addresses)</option>
            <option value="98">98 (1,073,741,824 addresses)</option>
            <option value="99">99 (536,870,912 addresses)</option>
            <option value="100">100 (268,435,456 addresses)</option>
            <option value="101">101 (134,217,728 addresses)</option>
            <option value="102">102 (67,108,864 addresses)</option>
            <option value="103">103 (33,554,432 addresses)</option>
            <option value="104">104 (16,777,216 addresses)</option>
            <option value="105">105 (8,388,608 addresses)</option>
            <option value="106">106 (4,194,304 addresses)</option>
            <option value="107">107 (2,097,152 addresses)</option>
            <option value="108">108 (1,048,576 addresses)</option>
            <option value="109">109 (524,288 addresses)</option>
            <option value="110">110 (262,144 addresses)</option>
            <option value="111">111 (131,072 addresses)</option>
            <option value="112">112 (65,536 addresses)</option>
            <option value="113">113 (32,768 addresses)</option>
            <option value="114">114 (16,384 addresses)</option>
            <option value="115">115 (8,192 addresses)</option>
            <option value="116">116 (4,096 addresses)</option>
            <option value="117">117 (2,048 addresses)</option>
            <option value="118">118 (1,024 addresses)</option>
            <option value="119">119 (512 addresses)</option>
            <option value="120">120 (256 addresses)</option>
            <option value="121">121 (128 addresses)</option>
            <option value="122">122 (64 addresses)</option>
            <option value="123">123 (32 addresses)</option>
            <option value="124">124 (16 addresses)</option>
            <option value="125">125 (8 addresses)</option>
            <option value="126">126 (4 addresses)</option>
            <option value="127">127 (2 addresses)</option>
            <option value="128">128 (1 address)</option></select>
         
          </div>
          <br></br>
          <br></br>
        
          

          <button className= 'button is-success is-medium is-fullwidth' onClick={this.handleClick} onClick={this._Calculator}>Calculator</button>
          <br />
          
          

         
          
        
          
          
          </div>

          <div className='column'></div>
          </div>

      </div><table>

   
       
  <tr>
   <th><abbr title="Position">Names</abbr></th>
   <th>value</th>
   </tr>
   
<tr>
<th>IP-Address</th>
<td Text style={{fontWeight: 'bold'}}>{this.state.IPaddress} / {this.state.BM}</td>
</tr>

<tr>
<th>Network</th>
<td >{this.state.network}</td>
</tr>

<tr>
<th>Prefix length</th>
<td >{this.state.BM}</td>
</tr>

<tr>
<th>Network range start</th>
<td >{this.state.networkrangestart}</td>

</tr>

<tr>
<th>Network range end</th>

<td >{this.state.networkrangeend}</td>
</tr>


<tr>
<th>total IP addresses</th>
<td >{this.state.totalIPaddresses}</td>
</tr>

<tr>
<th>IP-Address (Full)</th>
<td >{this.state.ipfull}</td>
</tr>
<tr>
<th>ip6.arpa Format</th>
<td >{this.state.format}</td>
</tr>

</table>
      </div>
      </div>
  );
  }
}

export default App;
