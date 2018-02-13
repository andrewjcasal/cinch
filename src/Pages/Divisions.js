import React, { Component } from 'react';
import Container from '../Components/Container';
import ProgramSteps from '../Components/ProgramSteps';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');

const Divisions = () => (
  <Container>
    <ProgramSteps />
    <div id="divisions" class="section programs">
      <div class="heading">
        Divisions
      </div>
      <div class="content-left container">
        <div class="row">
          <div class="col-md-12 subheading">
            Details
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <input type="text" placeholder="Division Name" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <input type="text" placeholder="Age Range" class="datetimepicker" id='datetimepicker1' />
          </div>
          <div class="col-md-3">
            <input type="text" placeholder="Age Range" class="datetimepicker" id='datetimepicker1' />
          </div>
          <div class="col-md-3">
            <div class="dropdown">
              <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span class="dropdown-label">Gender</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <input type="text" placeholder="Max # of Players" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 subheading">
            Dates
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input type="text" placeholder="Registration Open" class="datetimepicker" id='datetimepicker1' />
          </div>
          <div class="col-md-4">
            <input type="text" placeholder="Late Fee Start Date" class="datetimepicker" id='datetimepicker1' />
          </div>
          <div class="col-md-4">
            <input type="text" placeholder="Registration Close" class="datetimepicker" id='datetimepicker1' />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 subheading">
            Fees
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <input type="text" placeholder="Program Fee" />
          </div>
          <div class="col-md-3">
            <input type="text" placeholder="Late Fee" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 checkbox-row">
            <input type="checkbox" id="waitlist" /> <label for="waitlist">Enable Waitlist</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 checkbox-row">
            <input type="text" placeholder="Waitlist Start Date" class="datetimepicker" id='datetimepicker1' />
          </div>
        </div>
        <button class="save-button">SAVE</button>
      </div>
      <div class="content-right">
        <div class="photo-form-table gray-border">
          <div class="headings">
            <p class="role">Role</p>
            <p class="enable">Enable</p>
          </div>
          <ul class="photo-form-list">
            <li>
              <p class="role">2010 Boys</p>
              <div class="enable">
                <input type="checkbox" />
              </div>
              <img src="../../assets/images/ellipses.png" data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
            </li>
            <li>
              <p class="role">2009 Boys</p>
              <div class="enable">
                <input type="checkbox" />
              </div>
              <img src="../../assets/images/ellipses.png" data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
            </li>
            <li>
              <p class="role">2008 Boys</p>
              <div class="enable">
                <input type="checkbox" />
              </div>
              <img src="../../assets/images/ellipses.png" data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
            </li>
            <li>
              <p class="role">2007 Boys</p>
              <div class="enable">
                <input type="checkbox" />
              </div>
              <img src="../../assets/images/ellipses.png" data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-buttons">
        <button class="cancel-button">CANCEL</button>
        <button class="next-button">NEXT</button>
      </div>
    </div>
  </Container>
)

export default Divisions;