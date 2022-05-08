import './payment.css';
import { Link } from "react-router-dom";
export const Payment=function(){

    function goto(){
       <Link rel="stylesheet" to="/otp.jsx" />
      }
    return(
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
            <div>
                <div id='ca'>
                <img src="data:image/jpeg;base64,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" alt="" />
                <h4>Return Flight</h4>
                </div>

            </div>
            <hr />
        <div id="ca2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlHflujp5xw_SEWtRJACkI2Z4BAfnVkMTVA&usqp=CAU" alt="" />
        </div>
        <hr />
        <div id='to'>
        <p>Starting Price</p>
        <p>total</p>
    </div>
    <div id='less'>
        <p>Total Saving</p>
        <p id='la'>200</p>
    </div>
    <hr />
    <div id='gt'>

    </div>

    </div>
       </div>
        </> 
       
      );
      
}