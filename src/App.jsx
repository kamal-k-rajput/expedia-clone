// import logo from './logo.svg';
import './App.css';
// import { Form } from './components/form';

function App() {
  return (
    <>
    <div id='all'>
    <div id='pa1'>
    <div id='p2'>
     
    <div id='1'><h2>Who is flying?</h2>
    <p>Traveller names must match your government-issued photo ID exactly.</p>
    </div>
    <hr />
    <p>Traveller 1: Adult, primary contact</p>
    <div id='de'>
      <div>
    <p>Titel:*</p>
    <select name="titel" id="titel">
  <option value="Mr.">Mr.</option>
  <option value="Ms.">Ms.</option>
  <option value="Mrs.">Mrs</option>
  <option value="Miss">Miss</option>
  <option value="Master">Master</option>
</select>
</div>
<div>
<p>First Name : *</p>
<input type="text" required="True"/>
</div>
<div>
<p>Surname: *</p>
<input type="text" required="True"/>
</div>
</div>
<p>Country/Territory Code</p>
<select name="Country Code:" id="Code">
<option data-countryCode="GU" value="671">Guam (+671)</option>
        <option data-countryCode="GT" value="502">Guatemala (+502)</option>
        <option data-countryCode="GN" value="224">Guinea (+224)</option>
        <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
        <option data-countryCode="GY" value="592">Guyana (+592)</option>
        <option data-countryCode="HT" value="509">Haiti (+509)</option>
        <option data-countryCode="HN" value="504">Honduras (+504)</option>
        <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
        <option data-countryCode="HU" value="36">Hungary (+36)</option>
        <option data-countryCode="IS" value="354">Iceland (+354)</option>
        <option data-countryCode="IN" value="91">India (+91)</option>
        <option data-countryCode="ID" value="62">Indonesia (+62)</option>
        <option data-countryCode="IR" value="98">Iran (+98)</option>
        <option data-countryCode="IQ" value="964">Iraq (+964)</option>
        <option data-countryCode="IE" value="353">Ireland (+353)</option>
</select>
<p>Phone number*</p>
 <input type="number" placeholder="Incase We need to reach you"/>
  <div id='ce'>
    <input type="checkbox" />
    Receive text alerts about this trip (free of charge)
    </div>
    <p>Passport*</p>
    <select id="country" name="country">
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="India">India</option>
   </select>
   <p>Nationality*</p>
    <select id="country" name="country">
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="India">India</option>
   </select>

<p>Passport number:*</p>
<input type="text" placeholder="Enter tyour pasport Number" />
<p>Passport expiry date:*</p>
<select placeholder="Momth">
  <option name="" value="">Month</option>
  <option name="January" value="Jan">January</option>
  <option name="February" value="Feb">February</option>
  <option name="March" value="Mar">March</option>
  <option name="April" value="Apr">April</option>
	<option name="May" value="May">May</option>
  <option name="June" value="Jun">June</option>
  <option name="July" value="Jul">July</option>
  <option name="August" value="Aug">August</option>
	<option name="September" value="Sep">September</option>
  <option name="October" value="Oct">October</option>
  <option name="November" value="Nov">November</option>
  <option name="December" value="Dec">December</option>
</select>
<select name="day">
          <option value="">Day</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
     </select>
     <select name="year">
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option> 
          <option value="2030">2030</option>
      </select>

<p>Date of birth*</p>
<select placeholder="Momth">
  <option name="" value="">Month</option>
  <option name="January" value="Jan">January</option>
  <option name="February" value="Feb">February</option>
  <option name="March" value="Mar">March</option>
  <option name="April" value="Apr">April</option>
	<option name="May" value="May">May</option>
  <option name="June" value="Jun">June</option>
  <option name="July" value="Jul">July</option>
  <option name="August" value="Aug">August</option>
	<option name="September" value="Sep">September</option>
  <option name="October" value="Oct">October</option>
  <option name="November" value="Nov">November</option>
  <option name="December" value="Dec">December</option>
</select>
<select name="day">
          <option value="">Day</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
     </select>
     <select name="year">
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option> 
          <option value="2030">2030</option>
      </select>
      <hr />
      <p>Traveller 2:Adult</p>
    <div id='de'>
      <div>
    <p>Titel:*</p>
    <select name="titel" id="titel">
  <option value="Mr.">Mr.</option>
  <option value="Ms.">Ms.</option>
  <option value="Mrs.">Mrs</option>
  <option value="Miss">Miss</option>
  <option value="Master">Master</option>
</select>
</div>
<div>
<p>First Name : *</p>
<input type="text" required="True"/>
</div>
<div>
<p>Surname: *</p>
<input type="text" required="True"/>
</div>
</div>
<p>Country/Territory Code</p>
<select name="Country Code:" id="Code">
<option data-countryCode="GU" value="671">Guam (+671)</option>
        <option data-countryCode="GT" value="502">Guatemala (+502)</option>
        <option data-countryCode="GN" value="224">Guinea (+224)</option>
        <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
        <option data-countryCode="GY" value="592">Guyana (+592)</option>
        <option data-countryCode="HT" value="509">Haiti (+509)</option>
        <option data-countryCode="HN" value="504">Honduras (+504)</option>
        <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
        <option data-countryCode="HU" value="36">Hungary (+36)</option>
        <option data-countryCode="IS" value="354">Iceland (+354)</option>
        <option data-countryCode="IN" value="91">India (+91)</option>
        <option data-countryCode="ID" value="62">Indonesia (+62)</option>
        <option data-countryCode="IR" value="98">Iran (+98)</option>
        <option data-countryCode="IQ" value="964">Iraq (+964)</option>
        <option data-countryCode="IE" value="353">Ireland (+353)</option>
</select>
<p>Phone number*</p>
 <input type="number" placeholder="Incase We need to reach you"/>
  <div id='ce'>
    <input type="checkbox" />
    Receive text alerts about this trip (free of charge)
    </div>
    <p>Passport*</p>
    <select id="country" name="country">
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="India">India</option>
   </select>
   <p>Nationality*</p>
    <select id="country" name="country">
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="India">India</option>
   </select>

<p>Passport number:*</p>
<input type="text" placeholder="Enter tyour pasport Number" />
<p>Passport expiry date:*</p>
<select placeholder="Momth">
  <option name="" value="">Month</option>
  <option name="January" value="Jan">January</option>
  <option name="February" value="Feb">February</option>
  <option name="March" value="Mar">March</option>
  <option name="April" value="Apr">April</option>
	<option name="May" value="May">May</option>
  <option name="June" value="Jun">June</option>
  <option name="July" value="Jul">July</option>
  <option name="August" value="Aug">August</option>
	<option name="September" value="Sep">September</option>
  <option name="October" value="Oct">October</option>
  <option name="November" value="Nov">November</option>
  <option name="December" value="Dec">December</option>
</select>
<select name="day">
          <option value="">Day</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
     </select>
     <select name="year">
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option> 
          <option value="2030">2030</option>
      </select>

<p>Date of birth*</p>
<select placeholder="Momth">
  <option name="" value="">Month</option>
  <option name="January" value="Jan">January</option>
  <option name="February" value="Feb">February</option>
  <option name="March" value="Mar">March</option>
  <option name="April" value="Apr">April</option>
	<option name="May" value="May">May</option>
  <option name="June" value="Jun">June</option>
  <option name="July" value="Jul">July</option>
  <option name="August" value="Aug">August</option>
	<option name="September" value="Sep">September</option>
  <option name="October" value="Oct">October</option>
  <option name="November" value="Nov">November</option>
  <option name="December" value="Dec">December</option>
</select>
<select name="day">
          <option value="">Day</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
     </select>
     <select name="year">
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option> 
          <option value="2030">2030</option>
      </select>
      
</div>

    {/* <div><h2>Who is Checking?</h2></div> */}



  {/* <Payment> */}
<div id='pd'>
  <h1>Payment</h1>
  <hr />
  <div id='p1'>
  <p> We use secure transmission</p>
  <p> We use secure transmission</p>
  </div>
  <a href="g">Enter a cupon Code</a>
  <div id='im'>
    <img  src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="" />
    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="" />
    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="" />
    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg" alt="" />
  </div>

  <p>Name on Card*</p>
  <input type="text" />
  <p>Debit/Credit card number*</p>
  <input type="Number" />
  <p>Security code*</p>
  <input type="number" />
  <p>Expairy Date</p>
  <select  placeholder="Momth">
  <option name="" value="">Month</option>
  <option name="January" value="Jan">January</option>
  <option name="February" value="Feb">February</option>
  <option name="March" value="Mar">March</option>
  <option name="April" value="Apr">April</option>
	<option name="May" value="May">May</option>
  <option name="June" value="Jun">June</option>
  <option name="July" value="Jul">July</option>
  <option name="August" value="Aug">August</option>
	<option name="September" value="Sep">September</option>
  <option name="October" value="Oct">October</option>
  <option name="November" value="Nov">November</option>
  <option name="December" value="Dec">December</option>
</select>
  <select name="year">
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option> 
          <option value="2030">2030</option>
      </select>

  <p>Billing country/territory*</p>
  <select id="country" name="country">
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="India">India</option>
   </select>
   
  <p>PAN*</p>
  <input  type="text" required="true"/>
  </div>


  {/* button */}
  <div id='bd'>
    <hr />
  <p>By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..
We use secure transmission and encrypted storage to protect your personal information.This payment will be processed in India. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.
</p>

<button id='but' onClick={goto}>Compleate booking > </button>

<p>We use secure transmission and encrypted storage to protect your personal information.</p>

<p>This payment will be processed in India. This does not apply when the travel provider (airline/hotel/rail, etc.) processes your payment.</p>
</div>
</div>
<div id='pa2'>

</div>
   </div>
    </> 
   
  );
  function goto(){

  }
}

export default App;
