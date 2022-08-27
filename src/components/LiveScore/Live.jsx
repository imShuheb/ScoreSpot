import React from 'react'
import HomeNav from '../Navbars/HomeNav';
import SideNav from '../Navbars/SideNav';

function Live() {
  return (
    <div>
      <HomeNav />
      <SideNav />
      <div class="container">

        <div class="wc-table-wrapper">
          <div class="table-section">
            <div>

              <table class="wc-table">
                <thead>
                  <tr class="head">
                    <th colspan="3">336-5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rohit</td>
                    <td>140</td>
                    <td>113</td>
                  </tr>
                  <tr>
                    <td>Kohli</td>
                    <td>77</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>KL Rahul</td>
                    <td>57</td>
                    <td>78</td>
                  </tr>
                  <tr>
                    <td>Hardik</td>
                    <td>26</td>
                    <td>19</td>
                  </tr>
                  <tr class="head">
                    <td colspan="3">Over 50</td>
                  </tr>
                  <tr>
                    <td>Amir</td>
                    <td>3-47</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Wahab</td>
                    <td>1-71</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Hassan</td>
                    <td>1-84</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>

              <table class="wc-table">
                <thead>
                  <tr class="head">
                    <th colspan="3">166-6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fakhar</td>
                    <td>62</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Babar</td>
                    <td>48</td>
                    <td>57</td>
                  </tr>
                  <tr>
                    <td>Imad</td>
                    <td>22<sup>*</sup></td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Sarfaraz</td>
                    <td>12</td>
                    <td>30</td>
                  </tr>
                  <tr class="head">
                    <td colspan="3">Over 35</td>
                  </tr>
                  <tr>
                    <td>V Shankar</td>
                    <td>2-22</td>
                    <td>5.2</td>
                  </tr>
                  <tr>
                    <td>Kuldeep</td>
                    <td>2-32</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Hardik</td>
                    <td>2-40</td>
                    <td>7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="footer-section">
            <div class="wc-table-footer">
              To win, Shark require 171 runs with 90 balls remaining. <br />Man of the Match Rohit Sharma
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Live
